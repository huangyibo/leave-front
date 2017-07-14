import { Component, OnInit, Input } from '@angular/core';
import {MessageNotification} from "../../models/message-notification.model";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component( {
    /* tslint:disable */
    selector: '.tasksBox',
    /* tslint:enable */
    styleUrls: ['./tasks-box.component.css'],
    templateUrl: './tasks-box.component.html'
})
export class TasksBoxComponent implements OnInit {

    private messages: MessageNotification[];
    private tasksLength: {} = { 0: '9' };
    @Input() public user;

    constructor(private userService: UserService) {
        // TODO
      userService.currentUser.subscribe((user: User) => {
        this.user = user;
      });
    }

    public ngOnInit() {
        // TODO
    }

}
