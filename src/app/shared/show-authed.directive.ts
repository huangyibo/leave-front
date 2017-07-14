import {OnInit, TemplateRef, ViewContainerRef, Directive, Input} from "@angular/core";
import {UserService} from "./services/user.service";

@Directive({selector: '[showAuthed]'})
export class ShowAuthedDirective implements OnInit {

  constructor(private templateRef: TemplateRef<any>,
              private userService: UserService,
              private viewContainerRef: ViewContainerRef) {
  }

  condition: boolean;

  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe(
      isAuthenticated => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      }
    );
  }

  @Input() set showAuthed(condition: boolean) {
    this.condition = condition;
  }

}
