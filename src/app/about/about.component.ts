
import {Component, OnDestroy, OnInit} from "@angular/core";
import {BreadcrumbService} from "../shared/services/breadcrumb.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit, OnDestroy{
  public title: string = 'Hello World!';

  constructor(private breadcrumbService: BreadcrumbService) {
    // TODO
  }

  ngOnInit(): void {
    // settings the header for about
    this.breadcrumbService.set({
      header: '关于我们',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        },
        {
          icon: 'clock-o',
          link: ['/about'],
          title:  '关于我们'
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.breadcrumbService.clear();
  }


}
