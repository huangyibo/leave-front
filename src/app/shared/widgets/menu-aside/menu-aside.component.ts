import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  private currentUrl: string;
  private currentUser: User = new User();

  @Input() private links: Array<any> = [];

  constructor(private userService: UserService, public router: Router) {
    // getting the current url
    this.router.events.subscribe((evt) => this.currentUrl = evt.url);
    this.userService.currentUser.subscribe((user) => this.currentUser = user);
  }

  public ngOnInit() {
    // TODO
  }

}
