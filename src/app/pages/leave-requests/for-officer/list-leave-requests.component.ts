
import {Component, OnInit, OnDestroy} from "@angular/core";
import {BreadcrumbService} from "../../../shared/services/breadcrumb.service";
@Component({
  selector: 'list-leave-requests',
  templateUrl: './list-leave-requests.component.html',
  styleUrls: ['./list-leave-requests.component.css']
})
export class ListLeaveRequestsComponent implements OnInit, OnDestroy{

  constructor(private breadcrumbService: BreadcrumbService){}

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
          title:  '请假状态'
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }


}
