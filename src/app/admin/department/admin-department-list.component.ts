import {BreadcrumbService} from "../../shared/services/breadcrumb.service";
import {OnDestroy, OnInit, Component} from "@angular/core";

@Component({
  selector: 'admin-department-list',
  templateUrl: './admin-department-list.component.html',
  styleUrls: ['./admin-department-list.component.css']
})
export class AdminDepartmentListComponent implements OnInit, OnDestroy{

  constructor(private breadcrumbService: BreadcrumbService){}

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '科室部门列表',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/admin/department/list'],
          title:  '科室部门列表'
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
