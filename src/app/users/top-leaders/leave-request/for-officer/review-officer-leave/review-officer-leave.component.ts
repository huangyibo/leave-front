import {Observable} from "rxjs";
declare let $: any;
import {Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {BreadcrumbService} from "../../../../../shared/services/breadcrumb.service";
import {ToasterService, ToasterConfig, Toast} from "angular2-toaster";
import {LeaveRequest} from "../../../../../shared/models/leave-request.model";
import {Errors} from "../../../../../shared/models/errors.model";
import {User} from "../../../../../shared/models/user.model";
import {Page} from "../../../../../shared/models/page.model";
import {UserService} from "../../../../../shared/services/user.service";
import {LeaveRequestService} from "../../../../../shared/services/leave-request.service";
import {DateUtils} from "../../../../../shared/utils/date.utils";
@Component({
  selector: 'top-leader-review-officer-leave',
  templateUrl: 'review-officer-leave.component.html',
  styleUrls: ['review-officer-leave.component.css']
})
export class ReviewOfficerLeaveComponent implements OnInit, OnDestroy{

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

  ref: ChangeDetectorRef;

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
              ref: ChangeDetectorRef,
              private leaveRequestService: LeaveRequestService){
    this.toasterService = toasterService;
    this.ref = ref;
  }

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '学员请假审核',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/top-leader/leave-request/review/officer'],
          title:  '学员请假审核'
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
    this.leaveRequests = this.leaveRequestService.reviewLeaveRequests(page_no,10, 'OFFICER')
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
        if(!data){
          return [];
        }else {
          return data.list;
        }
      });
    /*this.leaveRequests.subscribe(data => {
      data.forEach((value, index) => {
        console.log("index: "+index +"   leave_id: "+ value.id);
      });
    });*/
    this.ref.markForCheck();
    this.ref.detectChanges();
  }

  submitReview(){
    this.reviewLeave(this.editingLeaveRequest.id, this.editingLeaveRequest.top_leader_agree, this.editingLeaveRequest.top_leader_comment);
  }

  reviewLeave(leaveId: number, top_leader_agree: boolean, top_leader_comment?: string){
    this.isLoading = true;
    let leaveRequest = new LeaveRequest();
    leaveRequest.id = leaveId;
    leaveRequest.top_leader_id = this.currentUser.id;
    leaveRequest.top_leader_agree = top_leader_agree;
    leaveRequest.top_leader_comment = (top_leader_comment==null)? '无':top_leader_comment;
    leaveRequest.top_leader_comm_time = DateUtils.formatDateTime(new Date())
    /*this.leaveRequests = this.leaveRequests
      .map(data => {
        if (data){
          let i = 0;
          for (let leave of data){
            if(leave.id === leaveId){
              leave.top_leader_agree = top_leader_agree;
              leave.top_leader_id = this.currentUser.id;
              leave.top_leader_comment =(top_leader_comment==null)? '无':top_leader_comment;
              data[i] = leave;
              break;
            }
            i++;
          }
        }
        return data;
      });*/
    this.ref.markForCheck();
    this.ref.detectChanges();

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
    this.ref.markForCheck();
    this.ref.detectChanges();
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
