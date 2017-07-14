import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TranslateModule} from "ng2-translate";
import {RouterModule} from "@angular/router";
import {ListErrorsComponent} from "./list-errors.component";
import {ShowAuthedDirective} from "./show-authed.directive";
import {BreadcrumbComponent} from "./widgets/breadcrumb/breadcrumb.component";
import {AppHeaderComponent} from "./widgets/app-header/app-header.component";
import {AppFooterComponent} from "./widgets/app-footer/app-footer.component";
import {MenuAsideComponent} from "./widgets/menu-aside/menu-aside.component";
import {ControlSidebarComponent} from "./widgets/control-sidebar/control-sidebar.component";
import {MessagesBoxComponent} from "./widgets/messages-box/messages-box.component";
import {NotificationBoxComponent} from "./widgets/notification-box/notification-box.component";
import {TasksBoxComponent} from "./widgets/tasks-box/tasks-box.component";
import {UserBoxComponent} from "./widgets/user-box/user-box.component";
import {FooterComponent} from "./layout/footer.component";
import {HeaderComponent} from "./layout/header.component";
import {CitySelectComponent} from "./city-select/city-select.component";
import {CitySelectPipe} from "./city-select/city-select.pipe";
import {CitySelectService} from "./city-select/city-select.service";
import {Ng2PaginationModule} from "ng2-pagination";
import {ToasterModule} from "angular2-toaster";
import {LoadingAnimateModule, LoadingAnimateService} from "ng2-loading-animate";

let widgets = [
  BreadcrumbComponent,
  AppHeaderComponent,
  AppFooterComponent,
  MenuAsideComponent,
  ControlSidebarComponent,
  MessagesBoxComponent,
  NotificationBoxComponent,
  TasksBoxComponent,
  UserBoxComponent,
  CitySelectComponent
];

let layouts = [
  HeaderComponent,
  FooterComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    TranslateModule,
    Ng2PaginationModule,
    ToasterModule,
    LoadingAnimateModule.forRoot()
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    CitySelectPipe,
    ...widgets,
    ...layouts
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    TranslateModule,
    ToasterModule,
    LoadingAnimateModule,
    Ng2PaginationModule,
    ListErrorsComponent,
    ShowAuthedDirective,
    CitySelectPipe,
    ...widgets,
    ...layouts
  ],
  providers: [
    CitySelectService,
  ]
})
export class SharedModule{
}
