var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { BreadcrumbService } from "../../shared/services/breadcrumb.service";
export var LeaveRequestsComponent = (function () {
    function LeaveRequestsComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.btnSubmitName = '提 交';
        this.btnResetName = '取消';
    }
    LeaveRequestsComponent.prototype.ngOnInit = function () {
        // settings the header for about
        this.breadcrumbService.set({
            header: 'SMMU卫生勤务学系请假单',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/pages/leave-request'],
                    title: '申请请假'
                }
            ]
        });
    };
    LeaveRequestsComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    LeaveRequestsComponent = __decorate([
        Component({
            selector: 'app-leave-requests',
            templateUrl: './leave-requests.component.html',
            styleUrls: ['./leave-requests.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService])
    ], LeaveRequestsComponent);
    return LeaveRequestsComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/pages/leave-requests/leave-requests.component.js.map