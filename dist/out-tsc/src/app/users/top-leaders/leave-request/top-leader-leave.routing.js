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
import { ReviewLeaderLeaveComponent } from "./for-leader/review-leader-leave/review-leader-leave.component";
import { ReviewOfficerLeaveComponent } from "./for-officer/review-officer-leave/review-officer-leave.component";
import { ResumeLeaderLeaveComponent } from "./for-leader/resume-leader-leave/resume-leader-leave.component";
import { ResumeOfficerLeaveComponent } from "./for-officer/resume-officer-leave/resume-officer-leave.component";
import { TopLeaderLeaveReportStatisticsComponent } from "./leave-report-statistics/leave-report-statistics.component";
export var routes = RouterModule.forChild([
    {
        path: '',
        children: [
            {
                path: 'review',
                children: [
                    {
                        path: 'leader',
                        component: ReviewLeaderLeaveComponent
                    },
                    {
                        path: 'officer',
                        component: ReviewOfficerLeaveComponent
                    }
                ]
            },
            {
                path: 'resume',
                children: [
                    {
                        path: 'leader',
                        component: ResumeLeaderLeaveComponent
                    },
                    {
                        path: 'officer',
                        component: ResumeOfficerLeaveComponent
                    }
                ]
            },
            {
                path: "report",
                component: TopLeaderLeaveReportStatisticsComponent
            }
        ]
    }
]);
export var TopLeaderLeaveRoutingModule = (function () {
    function TopLeaderLeaveRoutingModule() {
    }
    TopLeaderLeaveRoutingModule = __decorate([
        NgModule({
            imports: [
                routes
            ],
            exports: [
                RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TopLeaderLeaveRoutingModule);
    return TopLeaderLeaveRoutingModule;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/top-leaders/leave-request/top-leader-leave.routing.js.map