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
import { FullLayoutComponent } from "./layouts/full-layout.component";
import { HomeComponent } from "./home/home.component";
import { SimpleLayoutComponent } from "./layouts/simple-layout.component";
var rootRouting = RouterModule.forRoot([
    // Root
    // {
    //   path: '',
    //   redirectTo: 'home',
    //   pathMatch: 'full'
    // },
    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {
                path: 'about',
                loadChildren: './about/about.module#AboutModule'
            },
            {
                path: 'leader/leave-request',
                loadChildren: './users/leaders/leave-request/leader-leave.module#LeaderLeaveModule'
            },
            {
                path: 'officer/leave-request',
                loadChildren: './users/officers/leave-request/officer-leave.module#OfficerLeaveModule'
            },
            {
                path: 'top-leader/leave-request',
                loadChildren: './users/top-leaders/leave-request/top-leader-leave.module#TopLeaderLeaveModule'
            },
            {
                path: 'admin',
                loadChildren: './admin/admin/admin.module#AdminModule'
            },
            {
                path: 'admin/department',
                loadChildren: './admin/department/admin-department.module#AdminDepartmentModule'
            },
            {
                path: 'admin/user',
                loadChildren: './admin/user/admin-user.module#AdminUserModule'
            },
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: 'auth',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './auth/auth.module#AuthModule'
            }
        ]
    }
], { useHash: true });
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                rootRouting
            ],
            exports: [RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/app.routing.js.map