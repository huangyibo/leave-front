declare let $: any;

import {Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {BreadcrumbService} from "../../../shared/services/breadcrumb.service";
import {Observable} from "rxjs";
import {Errors} from "../../../shared/models/errors.model";
import {LeaveRequest} from "../../../shared/models/leave-request.model";
import {User} from "../../../shared/models/user.model";
import {Page} from "../../../shared/models/page.model";
import {ToasterConfig, ToasterService, Toast} from "angular2-toaster";
import {UserService} from "../../../shared/services/user.service";
import {LeaveRequestService} from "../../../shared/services/leave-request.service";
@Component({
  selector: 'officer-list-leave-requests',
  templateUrl: './list-leader-leave-requests.component.html',
  styleUrls: ['./list-leader-leave-requests.component.css']
})
export class ListLeaderLeaveRequestsComponent implements OnInit, OnDestroy {
  leaveRequests: Observable<LeaveRequest[]>;
  // leaveRequests: LeaveRequest[] = [];
  errors: Errors = new Errors();
  isLoading: boolean = false;

  submitingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveIndex: number;
  isSubmiting: boolean = false;

  currentUser: User = new User();
  page: Page<LeaveRequest> = new Page<LeaveRequest>();
  currentPage = 1;
  rowCount = 0;

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
              private leaveRequestService: LeaveRequestService) {
    this.toasterService = toasterService;
    this.ref =ref;
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
          link: ['/pages/list-leave-requests'],
          title: '请假审核状态'
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
    this.page.current_page = 1;
    this.page.has_pre_page = false;
    this.page.has_next_page = false;

    this.getPage(1);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }

  editLeave(leaveId: number){
    this.leaveRequests.subscribe((data: LeaveRequest[]) => {
      let i = 0;
      for(let leaveItem of data){
        if(leaveItem.id === leaveId){
          this.editingLeaveRequest = leaveItem;
          this.editingLeaveIndex = data.indexOf(leaveItem);
          break;
        }
        i = i + 1;
      }
    });
  }

  updateLeave(){
    this.isSubmiting = true;
    this.submitingLeaveRequest = LeaveRequest.filterRepeat(this.submitingLeaveRequest, this.editingLeaveRequest);
    this.leaveRequestService.save(this.submitingLeaveRequest).subscribe(
      (leave: LeaveRequest) => {
        this.isSubmiting = false;
        this.editingLeaveRequest = leave;
        $('#leave-modify').modal('hide');
        this.popToast('success', null, '更新请假信息成功');
      },
      err => {
        this.isSubmiting = false;
        this.popToast('error',null,err.message);
      }
    );
    this.leaveRequests = this.leaveRequests.map((data) => {
      data.forEach((value, index)=>{
        if(value.id == this.editingLeaveRequest.id){
          data[index] = this.editingLeaveRequest;
        }
      });
      return data;
    });
    this.ref.markForCheck();
    this.ref.detectChanges();

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
          .map(data => {
            data.forEach((value, index) => {
              if(value.id == leaveId){
                data[index].signed_status = true;
              }
            });
            return data;
          });
        this.ref.markForCheck();
        this.ref.detectChanges();
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
