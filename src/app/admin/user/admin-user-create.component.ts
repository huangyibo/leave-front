declare let $: any;
import {BreadcrumbService} from "../../shared/services/breadcrumb.service";
import {OnDestroy, OnInit, Component} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../../shared/models/user.model";
import {Errors} from "../../shared/models/errors.model";
import {Page} from "../../shared/models/page.model";
import {ToasterService, ToasterConfig, Toast} from "angular2-toaster";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'admin-user-create',
  templateUrl: './admin-user-create.component.html',
  styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent implements OnInit, OnDestroy{

  users : Observable<User[]>;
  errors : Errors = new Errors();
  isLoading : boolean = false;

  submitingUser: User = new User();
  editingUser: User = new User();
  editingUserIndex: number = 0;
  isSubmiting : boolean = false;


  currentUser: User = new User();
  page: Page<User> = new Page<User>();
  currentPage = 1;
  rowCount = 0;

  // Toaster config
  private toasterService: ToasterService;
  public toasterconfig : ToasterConfig = new ToasterConfig({
    showCloseButton: true,
    tapToDismiss: false,
    timeout: 3000
  });

  constructor(private breadcrumbService: BreadcrumbService,
              private userService: UserService,
              toasterService: ToasterService){
    this.toasterService = toasterService;
  }

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '用户管理',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/admin/user/create'],
          title:  '用户管理'
        }
      ]
    });
    this.userService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
      }
    );
    this.page = new Page<User>();
    this.page.current_page = 1;
    this.page.has_pre_page = false;
    this.page.has_next_page = false;

    this.getPage(1);

  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }


  editLeave(leaveId: number){
    this.users.subscribe((data: User[]) => {
      if (data){
        data.forEach((value, index)=>{
          if(value.id === leaveId){
            this.editingUser = value;
            this.editingUserIndex = index;
            return;
          }
        });
      }
    });

  }

  updateLeave(){
    this.isSubmiting = true;
    this.submitingUser = User.filterRepeat(this.editingUser, this.submitingUser);
    this.userService.save(this.submitingUser).subscribe(
      (user: User) => {
        this.users = this.users.map((data: User[])=>{
          this.submitingUser = data[this.editingUserIndex];
          data[this.editingUserIndex] = user;
          return data;
        });
        this.isSubmiting = false;

        $('#user-create').modal('hide');
        this.popToast('success', null, '用户信息更新成功');
      },
      err => {
        this.isSubmiting = false;
        this.popToast('error',null,err.message);
      }
    );
  }

  getPage(page_no: number){
    this.isLoading = true;
    this.users = this.userService.list(page_no,10)
      .do( data => {
        if(data!=null){
          this.page = data;
          this.currentPage = (data.current_page == null)? 1:data.current_page;
          this.rowCount = (data.row_count == null)? 1:data.row_count;
        }else{
          this.currentPage = 1;
          this.rowCount = 0;
        }
      })
      .map( data => {
        if(data){
          return data.list;
        }else{
          return [];
        }
      });
  }

  revokeLeave(userId: number){
    this.userService.delete(userId).subscribe(
      data => {
        this.getPage(this.page.current_page);
        this.popToast('success', null, '用户信息删除成功');
      },
      err => {
        this.popToast('error', null, (err.message == null) ? '网络不稳定，用户信息删除失败':err.message);
      }
    );
  }


  popToast(type: string, title: string, body: string){
    let toast: Toast = {
      type: type,
      title: title,
      body: body
    };
    this.toasterService.pop(toast);
  }


}
