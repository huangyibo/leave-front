declare let $:any;

import {Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import {BreadcrumbService} from "../../../../shared/services/breadcrumb.service";
import {Observable} from "rxjs";
import {Errors} from "../../../../shared/models/errors.model";
import {LeaveRequest} from "../../../../shared/models/leave-request.model";
import {Page} from "../../../../shared/models/page.model";
import {ToasterService, ToasterConfig, Toast} from "angular2-toaster";
import {UserService} from "../../../../shared/services/user.service";
import {LeaveRequestService} from "../../../../shared/services/leave-request.service";
import {LeaveRequestFilter} from "../../../../shared/models/leave-request-filter.model";
@Component({
  selector: 'leader-leave-report-statistics',
  templateUrl: 'leave-report-statistics.component.html',
  styleUrls: ['leave-report-statistics.component.css']
})
export class LeaderLeaveReportStatisticsComponent implements OnInit, OnDestroy{
  leaveRequests: Observable<LeaveRequest[]>;
  errors: Errors = new Errors();
  isLoading: boolean = false;

  editingLeaveRequest: LeaveRequest = new LeaveRequest();
  editingLeaveIndex: number;
  isSubmiting: boolean = false;

  leaveRequestFilter: LeaveRequestFilter = new LeaveRequestFilter();
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
              private leaveRequestService: LeaveRequestService){
    this.toasterService = toasterService;
    this.ref =ref;
  }

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '请假报表统计',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/leader/leave-request/report'],
          title:  '请假报表统计'
        }
      ]
    });

    this.page = new Page<LeaveRequest>();
    this.page.current_page = 1;
    this.page.has_pre_page = false;
    this.page.has_next_page = false;
    this.leaveRequestFilter = new LeaveRequestFilter();
    this.getPage(1);

    /*$(function () {
      $('#datetimepicker1').datetimepicker();
    });*/
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }

  editLeave(leaveId: number){
    this.leaveRequests.subscribe((data: LeaveRequest[]) => {
      data.forEach((value, index)=>{
        if(value.id === leaveId){
          this.editingLeaveRequest = value;
          this.editingLeaveIndex = index;
          return;
        }
      })
    });
  }

  getPage(page_no: number, leaveRequestFilter?: LeaveRequestFilter){
    this.isLoading = true;
    this.leaveRequests = this.leaveRequestService.reportLeaveRequests(page_no,10, leaveRequestFilter)
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
    this.ref.markForCheck();
    this.ref.detectChanges();
  }

  resetLeaveFilter(){
    this.leaveRequestFilter = new LeaveRequestFilter();
  }

  filterLeave(){
    this.getPage(1, this.leaveRequestFilter);
    $('#leave-filter').modal('hide');
    this.popToast('success', null, '根据您的查询条件，请假报表加载成功！')
  }

  searchByRealName(){
    if(!this.leaveRequestFilter.user_name){
      this.popToast('info', null, '请输入姓名检索！');
      return;
    }

    this.getPage(1, this.leaveRequestFilter);
    this.popToast('success', null, '根据输入的姓名，检索请假信息成功！');
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
