
import {Component, OnInit, OnDestroy} from "@angular/core";
import {BreadcrumbService} from "../../../../shared/services/breadcrumb.service";
import {Observable} from "rxjs";
import {Errors} from "../../../../shared/models/errors.model";
import {LeaveRequest} from "../../../../shared/models/leave-request.model";
import {User} from "../../../../shared/models/user.model";
import {Page} from "../../../../shared/models/page.model";
import {ToasterService, ToasterConfig, Toast} from "angular2-toaster";
import {UserService} from "../../../../shared/services/user.service";
import {LeaveRequestService} from "../../../../shared/services/leave-request.service";
@Component({
  selector: 'officer-history-leave',
  templateUrl: 'officer-history-leave.component.html',
  styleUrls: ['officer-history-leave.component.css']
})
export class OfficerHistoryLeaveComponent implements OnInit, OnDestroy{

  leaveRequests : Observable<LeaveRequest[]>;
  errors : Errors = new Errors();
  isLoading : boolean = false;
  editingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveIndex: number = 0;

  currentUser: User = new User();
  page: Page<LeaveRequest> = new Page<LeaveRequest>();
  currentPage = 1;
  rowCount = 0;

  // Toaster config
  private toasterService: ToasterService;
  public toasterconfig : ToasterConfig = new ToasterConfig({
    showCloseButton: true,
    tapToDismiss: false,
    timeout: 1500
  });

  constructor(private breadcrumbService: BreadcrumbService,
              private userService: UserService,
              toasterService: ToasterService,
              private leaveRequestService: LeaveRequestService){
    this.toasterService = toasterService;
  }

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '历史请假记录',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/officer/leave-request/history'],
          title:  '历史请假记录'
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

  getPage(page_no: number){
    this.isLoading = true;
    this.leaveRequests = this.leaveRequestService.currentLeaveRequests(page_no,10)
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

  signLeave(leaveId: number){
    this.leaveRequestService.signLeaveRequestByID(leaveId).subscribe(
      data => {
        this.popToast('success', null, data.toString());
        this.leaveRequests = this.leaveRequests
          .do((data: LeaveRequest[]) => {
            let i = 0;
            for(let leaveItem of data){
              if(leaveItem.id === leaveId){
                leaveItem.signed_status = true;
                data[i] = leaveItem;
                break;
              }
              i++;
            }
          }).map(data => data);
      },
      err => {
        this.popToast('error', null, (!err.message)? '网络不稳定，请假签到失败': err.message);
      }
    );
  }

  detailLeave(leaveId: number){
    let i = 0;
    this.leaveRequests.subscribe((data: LeaveRequest[]) => {
      for(let leaveItem of data){
        if(leaveItem.id === leaveId){
          this.editingLeaveRequest = leaveItem;
          this.editingLeaveIndex = i;
          break;
        }
        i = i + 1;
      }
    });
    console.log("test:"+this.page.list[0].top_leader_agree);
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
