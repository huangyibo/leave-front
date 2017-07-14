import { Component, OnInit } from '@angular/core';
import {MessageNotification} from "../../models/message-notification.model";


@Component( {
    /* tslint:disable */
    selector: '.notificationsBox',
    /* tslint:enable */
    styleUrls: ['./notification-box.component.css'],
    templateUrl: './notification-box.component.html'
})
export class NotificationBoxComponent implements OnInit {

    private messages: MessageNotification[];
    private notifLength: {} = {0: '10'};

    constructor() {
        // TODO
    }

    public ngOnInit() {
        // TODO
    }

}
