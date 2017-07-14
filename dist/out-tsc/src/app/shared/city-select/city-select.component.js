var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CitySelectService } from "./city-select.service";
export var CitySelectComponent = (function () {
    function CitySelectComponent(citySelectService) {
        this.citySelectService = citySelectService;
        this.result = new EventEmitter();
        this.isExpand = false;
    }
    CitySelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.citySelectService.getAddress().subscribe(function (res) {
            _this.list = res;
            console.log(_this.list);
        });
    };
    CitySelectComponent.prototype.selectHandle = function (province, city, district) {
        this.isExpand = false;
        this.selected = province + '/' + city + '/' + district;
        this.result.emit(this.selected);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], CitySelectComponent.prototype, "result", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CitySelectComponent.prototype, "selected", void 0);
    CitySelectComponent = __decorate([
        Component({
            selector: 'app-mit-city-select',
            templateUrl: './city-select.component.html',
            styleUrls: ['./city-select.component.css']
        }), 
        __metadata('design:paramtypes', [CitySelectService])
    ], CitySelectComponent);
    return CitySelectComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/city-select/city-select.component.js.map