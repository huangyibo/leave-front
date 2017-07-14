import {OnInit, OnDestroy, Component} from "@angular/core";
import {BreadcrumbService} from "../../shared/services/breadcrumb.service";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit, OnDestroy{

  private btnSubmitName: string = '提 交';
  private btnResetName: string = '取消';
  constructor(private breadcrumbService: BreadcrumbService){}

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
          link: ['/pages/leave-request'],
          title:  '申请请假'
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }

}
