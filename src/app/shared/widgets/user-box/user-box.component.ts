import {Component, OnInit, Output} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { Router } from '@angular/router';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {LocaleTranslateService} from "../../services/translate.service";

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  private currentUser: User = new User();

    constructor(private userService: UserService,
  private router: Router, private localeTranslateService: LocaleTranslateService) {
      this.userService.currentUser.subscribe((user: User) => this.currentUser = user);
  }

  public ngOnInit() {
    // TODO
  }

  logout = (): void => {
    this.userService.purgeAuth();
    this.router.navigate(['/auth/login']);
    // this.auth.logout();
  }

  userManage = (): void => {

  }

  @Output()
  private translate = (msg: string): string => {
      return this.localeTranslateService.getTranslate().instant(msg);
  }
}
