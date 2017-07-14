var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { TranslateModule } from "ng2-translate";
import { RouterModule } from "@angular/router";
import { ListErrorsComponent } from "./list-errors.component";
import { ShowAuthedDirective } from "./show-authed.directive";
import { BreadcrumbComponent } from "./widgets/breadcrumb/breadcrumb.component";
import { AppHeaderComponent } from "./widgets/app-header/app-header.component";
import { AppFooterComponent } from "./widgets/app-footer/app-footer.component";
import { MenuAsideComponent } from "./widgets/menu-aside/menu-aside.component";
import { ControlSidebarComponent } from "./widgets/control-sidebar/control-sidebar.component";
import { MessagesBoxComponent } from "./widgets/messages-box/messages-box.component";
import { NotificationBoxComponent } from "./widgets/notification-box/notification-box.component";
import { TasksBoxComponent } from "./widgets/tasks-box/tasks-box.component";
import { UserBoxComponent } from "./widgets/user-box/user-box.component";
import { FooterComponent } from "./layout/footer.component";
import { HeaderComponent } from "./layout/header.component";
import { CitySelectComponent } from "./city-select/city-select.component";
import { CitySelectPipe } from "./city-select/city-select.pipe";
import { CitySelectService } from "./city-select/city-select.service";
import { Ng2PaginationModule } from "ng2-pagination";
import { ToasterModule } from "angular2-toaster";
import { LoadingAnimateModule } from "ng2-loading-animate";
var widgets = [
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
var layouts = [
    HeaderComponent,
    FooterComponent
];
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
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
                CitySelectPipe
            ].concat(widgets, layouts),
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
                CitySelectPipe
            ].concat(widgets, layouts),
            providers: [
                CitySelectService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/shared.module.js.map