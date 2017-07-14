import {Component, OnInit, OnDestroy} from "@angular/core";
import {BreadcrumbService} from "../shared/services/breadcrumb.service";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user.model";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public date: Date = new Date();

  real_name: string;

  constructor(private breadServ: BreadcrumbService,
      private userService: UserService){
    // TODO
  }

  public ngOnInit() {
    // setttings the header for the home
    this.breadServ.clear();
    this.breadServ.set({
      description: '',
      display: true,
      header: '主页',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: '主页'
        }
      ]
    });

    // 获取 real_name
    this.userService.currentUser.subscribe(
      (user: User) => {
        this.real_name = user.real_name;
      }
    );

  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
