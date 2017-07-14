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
import { SharedModule } from "../../../shared/shared.module";
import { OfficerListLeaveRequestsComponent } from "./officer-list-leave-requests.component";
import { OfficerLeaveRequestsComponent } from "./officer-leave-requests.component";
import { OfficerLeaveRoutingModule } from "./officer-leave.routing";
import { DatepickerModule } from "ng2-bootstrap";
import { OfficerHistoryLeaveComponent } from "./officer-history-leave/officer-history-leave.component";
export var OfficerLeaveModule = (function () {
    function OfficerLeaveModule() {
    }
    OfficerLeaveModule = __decorate([
        NgModule({
            imports: [
                SharedModule,
                DatepickerModule.forRoot(),
                OfficerLeaveRoutingModule
            ],
            declarations: [
                OfficerListLeaveRequestsComponent,
                OfficerLeaveRequestsComponent,
                OfficerHistoryLeaveComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], OfficerLeaveModule);
    return OfficerLeaveModule;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/officers/leave-request/officer-leave.module.js.map