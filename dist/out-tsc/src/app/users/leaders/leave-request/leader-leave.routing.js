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
import { RouterModule } from "@angular/router";
import { LeaderLeaveRequestsComponent } from "./leader-leave-requests.component";
import { LeaderListLeaveRequestsComponent } from "./leader-list-leave-requests.component";
import { ListLeaderLeaveRequestsComponent } from "./list-leader-leave-requests.component";
import { LeaderHistoryLeaveComponent } from "./leader-history-leave/leader-history-leave.component";
import { LeaderLeaveReportStatisticsComponent } from "./leave-report-statistics/leave-report-statistics.component";
export var routes = RouterModule.forChild([
    {
        path: '',
        children: [
            {
                path: '',
                component: LeaderLeaveRequestsComponent
            },
            {
                path: 'officer-leave-list',
                component: LeaderListLeaveRequestsComponent
            },
            {
                path: 'list',
                component: ListLeaderLeaveRequestsComponent
            },
            {
                path: 'history',
                component: LeaderHistoryLeaveComponent
            },
            {
                path: 'report',
                component: LeaderLeaveReportStatisticsComponent
            }
        ]
    }
]);
export var LeaderLeaveRoutingModule = (function () {
    function LeaderLeaveRoutingModule() {
    }
    LeaderLeaveRoutingModule = __decorate([
        NgModule({
            imports: [
                routes
            ],
            exports: [
                RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LeaderLeaveRoutingModule);
    return LeaderLeaveRoutingModule;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/leaders/leave-request/leader-leave.routing.js.map