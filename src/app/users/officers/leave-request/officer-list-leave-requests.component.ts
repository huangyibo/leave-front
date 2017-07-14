import {Page} from "../../../shared/models/page.model";
declare let $: any;

import {Component, OnInit, OnDestroy} from "@angular/core";
import {BreadcrumbService} from "../../../shared/services/breadcrumb.service";
import {LeaveRequestService} from "../../../shared/services/leave-request.service";
import {LeaveRequest} from "../../../shared/models/leave-request.model";
import {Errors} from "../../../shared/models/errors.model";
import {User} from "../../../shared/models/user.model";
import {UserService} from "../../../shared/services/user.service";
import {Observable} from "rxjs";
import {ToasterService, ToasterConfig, Toast} from "angular2-toaster";
@Component({
  selector: 'officer-list-leave-requests',
  templateUrl: './officer-list-leave-requests.component.html',
  styleUrls: ['./officer-list-leave-requests.component.css']
})
export class OfficerListLeaveRequestsComponent implements OnInit, OnDestroy{

  leaveRequests : Observable<LeaveRequest[]>;
  errors : Errors = new Errors();
  isLoading : boolean = false;

  submitingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveIndex: number = 0;
  isSubmiting : boolean = false;


  currentUser: User = new User();
  page: Page<LeaveRequest> = new Page<LeaveRequest>();
  currentPage = 1;
  rowCount = 0;
  hasPrePage: boolean = false;
  hasNextPage: boolean = false;

  // Toaster config
  private toasterService: ToasterService;
  public toasterconfig : ToasterConfig = new ToasterConfig({
    showCloseButton: true,
    tapToDismiss: false,
    timeout: 3000
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
      header: '请假审核状态',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/officer/leave-request/list'],
          title:  '请假审核状态'
        }
      ]
    });
    this.hasPrePage = false;
    this.hasNextPage = false;
    this.userService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
        // this.isLoading = false;
      }
    );
    this.page = new Page<LeaveRequest>();
    this.page.current_page = 1;
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

  updateLeave(){
    this.isSubmiting = true;
    // this.leaveRequests[this.editingLeaveIndex] = this.editingLeaveRequest;

    this.submitingLeaveRequest = LeaveRequest.filterRepeat(this.editingLeaveRequest, this.submitingLeaveRequest);
    this.leaveRequestService.save(this.submitingLeaveRequest).subscribe(
    (leave: LeaveRequest) => {
      this.leaveRequests = this.leaveRequests.map((data: LeaveRequest[])=>{
        this.submitingLeaveRequest = data[this.editingLeaveIndex];
        data[this.editingLeaveIndex] = this.editingLeaveRequest;
        return data;
      });
      this.isSubmiting = false;
      this.editingLeaveRequest = new LeaveRequest();
      this.editingLeaveIndex = 0;
      $('#leave-modify').modal('hide');
      this.popToast('success', null, '更新请假信息成功');
    },
      err => {
        this.isSubmiting = false;
        this.popToast('error',null,err.message);
      }
    );
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

  revokeLeave(leaveId: number){
    this.leaveRequestService.delete(leaveId).subscribe(
      data => {
        this.getPage(this.page.current_page);
        this.popToast('success', null, '请假撤销成功');
      },
      err => {
        this.popToast('error', null, (err.message == null) ? '网络不稳定，请假撤销失败':err.message);
      }
    );
  }

  detailLeave(leaveId: number){
    this.editLeave(leaveId);
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
