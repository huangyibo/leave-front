import {Injectable} from "@angular/core";
import {MessageNotification} from "../models/message-notification.model";
import {Subject, ReplaySubject} from "rxjs";

let initialMessage: MessageNotification[] = [];

interface IMessageOperation extends Function {
  (messages: MessageNotification[]): MessageNotification[];
}

@Injectable()
export class MessageService {
  private messagesList: MessageNotification[] = [];
  // a stream that publishes new messages only once
  public newMessages: Subject<MessageNotification> = new Subject<MessageNotification>();

  // `messages` is a stream that emits an array of the most up to date messages
  public messages: ReplaySubject<MessageNotification[]> = new ReplaySubject<MessageNotification[]>(1);

  // `updates` receives _operations_ to be applied to our `messages`
  // it's a way we can perform changes on *all* messages (that are currently
  // stored in `messages`)
  public updates: Subject<any> = new Subject<any>();

  // action streams
  public create: Subject<MessageNotification> = new Subject<MessageNotification>();

  constructor() {
    this.updates.subscribe((ope) => {
      this.messagesList = ope(this.messagesList);
      console.log(this.messagesList);
      this.messages.next(this.messagesList);
    });

    this.newMessages
      .map(function (message: MessageNotification): IMessageOperation {
        return (messages: MessageNotification[]) => {
          return messages.concat(message);
        }
      })
      .subscribe(this.updates);
  }

  // an imperative function call to this action stream
  public addMessage(message: MessageNotification): void {
    this.newMessages.next(message);
  }

}
