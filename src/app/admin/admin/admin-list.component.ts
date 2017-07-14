import {BreadcrumbService} from "../../shared/services/breadcrumb.service";
import {OnDestroy, OnInit, Component} from "@angular/core";

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit, OnDestroy{

  constructor(private breadcrumbService: BreadcrumbService){}

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '管理员列表',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/admin/list'],
          title:  '管理员列表'
        }
      ]
    });

    /*$(function () {
     $('#datetimepicker1').datetimepicker();
     });*/
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }


}
