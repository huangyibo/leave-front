import {Component} from "@angular/core";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component( {
    selector: 'app-header',
    styleUrls: ['./app-header.component.css'],
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

  constructor(
    private userService: UserService,
    private router: Router) {
    // TODO
  }

  logout(){
    this.userService.purgeAuth();
    this.router.navigateByUrl('/auth/login');
  }
}
