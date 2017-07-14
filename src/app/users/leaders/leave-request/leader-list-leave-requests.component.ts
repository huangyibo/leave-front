import {Observable} from "rxjs";
declare let $: any;

import {Component, OnInit, OnDestroy} from "@angular/core";
import {BreadcrumbService} from "../../../shared/services/breadcrumb.service";
import {Errors} from "../../../shared/models/errors.model";
import {LeaveRequest} from "../../../shared/models/leave-request.model";
import {User} from "../../../shared/models/user.model";
import {Page} from "../../../shared/models/page.model";
import {ToasterService, ToasterConfig, Toast} from "angular2-toaster";
import {UserService} from "../../../shared/services/user.service";
import {LeaveRequestService} from "../../../shared/services/leave-request.service";
import {DateUtils} from "../../../shared/utils/date.utils";
@Component({
  selector: 'leader-list-leave-requests',
  templateUrl: './leader-list-leave-requests.component.html',
  styleUrls: ['./leader-list-leave-requests.component.css']
})
export class LeaderListLeaveRequestsComponent implements OnInit, OnDestroy{
  leaveRequests : Observable<LeaveRequest[]>;
  errors : Errors = new Errors();
  isLoading : boolean = false;

  submitingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveIndex: number = 0;
  isSubmiting : boolean = false;

  currentUser: User = new User();
  page: Page<LeaveRequest> = new Page<LeaveRequest>();
  currentPage: number = 1;
  rowCount: number = 0;

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
    /*this.page = new Page<LeaveRequest>();
    this.page.current_page = 1;*/
  }

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '请假审批',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/leader/leave-request/officer-leave-list'],
          title:  '请假审批'
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
      for(let leaveItem of data){
        if(leaveItem.id == leaveId){
          this.editingLeaveRequest = leaveItem;
          this.editingLeaveIndex = i;
          break;
        }
        i = i + 1;
      }
    });
  }

  getPage(page_no: number){
    this.isLoading = true;
    this.leaveRequests = this.leaveRequestService.reviewLeaveRequests(page_no,10)
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
        if(!data){
          return [];
        }else {
          return data.list;
        }
      });
  }

  submitReview(){
    this.reviewLeave(this.editingLeaveRequest.id, this.editingLeaveRequest.leader_agree, this.editingLeaveRequest.leader_comment);
  }

  reviewLeave(leaveId: number, leader_agree: boolean, leader_comment?: string){
    this.isLoading = true;
    let leaveRequest = new LeaveRequest();
    leaveRequest.id = leaveId;
    leaveRequest.leader_id = this.currentUser.id;
    leaveRequest.leader_agree = leader_agree;
    leaveRequest.leader_comment = (leader_comment==null)? '无':leader_comment;
    leaveRequest.leader_comm_time = DateUtils.formatDateTime(new Date())
    this.leaveRequests = this.leaveRequests
      .map(data => {
        console.log("data:.........."+data);
        if (data){
          let i = 0;
          for(let leaveItem of data){
            if(leaveItem.id === leaveId){
              leaveItem.leader_agree = leader_agree;
              leaveItem.leader_id = this.currentUser.id;
              leaveItem.leader_comment =(leader_comment==null)? '无':leader_comment;
              data[i] = leaveItem;
              break;
            }
            i++;
          }
        }
        return data;
      });

    this.leaveRequestService.save(leaveRequest).subscribe(
      data =>{
        this.isLoading = false;
        $('#leave-detail').modal('hide');
        this.getPage(this.currentPage);
        this.popToast('success', null, '请假审核成功');
      },
      err => {
        this.isLoading = false;
        this.popToast('warning', null, (!err.message)? "网络不稳定，您的审核请求失败":err.message);
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
