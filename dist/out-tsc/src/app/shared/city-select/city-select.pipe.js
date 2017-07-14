var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
export var CitySelectPipe = (function () {
    function CitySelectPipe() {
    }
    CitySelectPipe.prototype.transform = function (arr, parent) {
        if (!parent) {
            return arr.filter(this.isProvince);
        }
        else if (parent) {
            return this.isChild(arr, parent);
        }
        return [];
    };
    CitySelectPipe.prototype.isProvince = function (e) {
        return !e.parent;
    };
    CitySelectPipe.prototype.isChild = function (arr, parent) {
        var _arr = [];
        arr.forEach(function (item) {
            if (item.parent === parent) {
                _arr.push(item);
            }
            ;
        });
        return _arr;
    };
    CitySelectPipe = __decorate([
        Pipe({
            name: 'citySelectPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], CitySelectPipe);
    return CitySelectPipe;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/city-select/city-select.pipe.js.map