
import {Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {BreadcrumbService} from "../../../../../shared/services/breadcrumb.service";
import {LeaveRequest} from "../../../../../shared/models/leave-request.model";
import {Errors} from "../../../../../shared/models/errors.model";
import {User} from "../../../../../shared/models/user.model";
import {Page} from "../../../../../shared/models/page.model";
import {ToasterService, ToasterConfig, Toast} from "angular2-toaster";
import {UserService} from "../../../../../shared/services/user.service";
import {LeaveRequestService} from "../../../../../shared/services/leave-request.service";
import {Observable} from "rxjs";
@Component({
  selector: 'top-leader-resume-leader-leave',
  templateUrl: 'resume-leader-leave.component.html',
  styleUrls: ['resume-leader-leave.component.css']
})
export class ResumeLeaderLeaveComponent implements OnInit, OnDestroy{
  leaveRequests: Observable<LeaveRequest[]>;
  errors: Errors = new Errors();
  isLoading: boolean = false;

  submitingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveIndex: number = 0;
  isSubmiting: boolean = false;

  currentUser: User = new User();
  page: Page<LeaveRequest> = new Page<LeaveRequest>();
  currentPage: number = 1;
  rowCount: number = 0;

  ref: ChangeDetectorRef;

  // Toaster config
  private toasterService: ToasterService;
  public toasterconfig: ToasterConfig = new ToasterConfig({
    showCloseButton: true,
    tapToDismiss: false,
    timeout: 1500
  });

  constructor(private breadcrumbService: BreadcrumbService,
              private userService: UserService,
              toasterService: ToasterService,
              ref: ChangeDetectorRef,
              private leaveRequestService: LeaveRequestService){
    this.toasterService = toasterService;
    this.ref = ref;
  }

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '科室干部销假管理',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/top-leader/leave-request/resume/leader'],
          title:  '科室干部销假管理'
        }
      ]
    });

    this.userService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
        // this.isLoading = false;
      }
    );
    this.page = new Page<LeaveRequest>();
    this.page.has_pre_page = false;
    this.page.has_next_page = false;
    this.getPage(1);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }


  editLeave(leaveId: number){
    let i = 0;
    this.leaveRequests.subscribe((data: LeaveRequest[]) => {
      if (data){
        data.forEach((value, index) => {
          if(value.id == leaveId){
            this.editingLeaveRequest = value;
            this.editingLeaveIndex = index;
            return;
          }
        });
      }
    });
  }

  getPage(page_no: number){
    this.isLoading = true;
    this.leaveRequests = this.leaveRequestService.resumeLeaveRequests(page_no,10, 'LEADER')
      .do( data => {
        if(!(data == null)){
          this.page = data;
          this.currentPage = (data.current_page == null)? 1:data.current_page;
          this.rowCount = (data.row_count == null)? 1:data.row_count;
        }else{
          this.currentPage = 1;
          this.rowCount = 0;
        }
      })
      .map( data => {
        this.isLoading = false;
        if(!data){
          return [];
        }else {
          return data.list;
        }
      });
    this.ref.markForCheck();
    this.ref.detectChanges();
  }

  fakeLeave(leaveId: number){
    this.isLoading = true;
    let leaveRequest = new LeaveRequest();
    leaveRequest.id = leaveId;
    leaveRequest.fake_status = true;
    this.leaveRequestService.save(leaveRequest).subscribe(
      data => {
        this.isLoading = false;
        this.getPage(this.currentPage);
        this.popToast('success', null, '销假成功！');
      },
      error => {
        this.isLoading = false;
        this.popToast('warning', null, (!error.message)? "网络不稳定，您的销假请求失败":error.message);
      }
    );
    this.ref.markForCheck();
    this.ref.detectChanges();
  }

  remindSignLeave(leaveId: number, user_id: number, user_name: string){
    this.popToast('success', null, '您已成功提醒'+user_name+'签到！');
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
