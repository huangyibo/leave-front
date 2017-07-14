var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BreadcrumbService } from "../../shared/services/breadcrumb.service";
import { Component } from "@angular/core";
export var AdminListComponent = (function () {
    function AdminListComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
    }
    AdminListComponent.prototype.ngOnInit = function () {
        // settings the header for about
        this.breadcrumbService.set({
            header: '管理员列表',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/admin/list'],
                    title: '管理员列表'
                }
            ]
        });
        /*$(function () {
         $('#datetimepicker1').datetimepicker();
         });*/
    };
    AdminListComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    AdminListComponent = __decorate([
        Component({
            selector: 'admin-list',
            templateUrl: './admin-list.component.html',
            styleUrls: ['./admin-list.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService])
    ], AdminListComponent);
    return AdminListComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/admin/admin/admin-list.component.js.map