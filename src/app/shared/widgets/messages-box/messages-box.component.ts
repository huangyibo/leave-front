import {Component, OnInit} from "@angular/core";
import {MessageNotification} from "../../models/message-notification.model";
import {LoggerService} from "../../services/logger.service";
import {MessageService} from "../../services/message.service";

@Component({
  /* tslint:disable */
  selector: '.messagesBox',
  /* tslint:enable */
  styleUrls: ['./messages-box.component.css'],
  templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
  // Declaring the variable for binding with initial value
  private messages: MessageNotification[];
  private msgLength: {};

  constructor(private msgService: MessageService, private logger: LoggerService) {
    this.messages = [];
  }

  public ngOnInit() {
    // Every incoming message changes entire local message Array.
    this.msgService.messages.subscribe((msg: MessageNotification[]) => {
      this.logger.log('MsgBox', null, 'RECIEVED.MESSAGE', null);
      this.messages = msg;
      this.msgLength = {0: this.messages.length};
    });
  }
}
