import {OnInit, OnDestroy, Component} from "@angular/core";
import {BreadcrumbService} from "../../../shared/services/breadcrumb.service";
import {User} from "../../../shared/models/user.model";
import {UserService} from "../../../shared/services/user.service";
import {LeaveRequest} from "../../../shared/models/leave-request.model";
import {LeaveRequestService} from "../../../shared/services/leave-request.service";
import {Errors} from "../../../shared/models/errors.model";
import {Router} from "@angular/router";
import {DateUtils} from "../../../shared/utils/date.utils";
import {ToasterConfig, ToasterService, Toast} from "angular2-toaster";

@Component({
  selector: 'leader-leave-requests',
  templateUrl: './leader-leave-requests.component.html',
  styleUrls: [ './leader-leave-requests.component.css']
})
export class LeaderLeaveRequestsComponent implements OnInit, OnDestroy{

  private btnSubmitName: string = '提 交';
  private btnResetName: string = '取消';

  private isLoading: boolean = false;
  private currentUser: User;
  private leaveRequest: LeaveRequest = new LeaveRequest();
  errors: Errors = new Errors();

  // Toaster config
  private toasterService: ToasterService;
  public toasterconfig : ToasterConfig = new ToasterConfig({
    showCloseButton: true,
    tapToDismiss: false,
    timeout: 4000
  });

  constructor(private breadcrumbService: BreadcrumbService,
              private leaveRequestService : LeaveRequestService,
              private router: Router,
              toasterService: ToasterService,
              private userService: UserService){
    this.toasterService = toasterService;
  }



  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: 'SMMU卫生勤务学系请假单',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/leader/leave-request'],
          title:  '申请请假'
        }
      ]
    });
    this.leaveRequest = new LeaveRequest();
    // setting the current user
    this.userService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
        this.leaveRequest.user_id = this.currentUser.id;
      }
    );

  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }

  submitLeave(): void {
    this.isLoading = true;
    this.errors = new Errors();
    this.leaveRequest.apply_time = DateUtils.formatDateTime(new Date());
    this.leaveRequestService.save(this.leaveRequest)
      .subscribe(
        (leaveRequest: LeaveRequest) => {
          this.leaveRequest = leaveRequest;
          this.isLoading = false;
          this.popToast('success', null, "请假信息提交成功，正在跳转至请假审核状态页面");
          this.router.navigateByUrl('/leader/leave-request/list')
        },
        (error) => {
          this.errors.errors['error'] = error.message;
          this.popToast('error', null, (!error.message)? '网络不稳定，请假信息提交失败': error.message);
          this.isLoading = false;
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
