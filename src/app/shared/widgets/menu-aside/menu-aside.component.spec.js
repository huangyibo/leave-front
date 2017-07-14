"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var menu_aside_component_1 = require('./menu-aside.component');
testing_1.describe('Component: MenuAside', function () {
    var builder;
    testing_1.beforeEachProviders(function () { return [menu_aside_component_1.MenuAsideComponent]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    testing_1.it('should inject the component', testing_1.inject([menu_aside_component_1.MenuAsideComponent], function (component) {
        testing_1.expect(component).toBeTruthy();
    }));
    testing_1.it('should create the component', testing_1.inject([], function () {
        return builder.createAsync(MenuAsideComponentTestController)
            .then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(menu_aside_component_1.MenuAsideComponent));
            testing_1.expect(query).toBeTruthy();
            testing_1.expect(query.componentInstance).toBeTruthy();
        });
    }));
});
var MenuAsideComponentTestController = (function () {
    function MenuAsideComponentTestController() {
    }
    MenuAsideComponentTestController = __decorate([
        core_1.Component({
            directives: [menu_aside_component_1.MenuAsideComponent],
            selector: 'app-test',
            template: "\n    <app-menu-aside></app-menu-aside>\n  "
        })
    ], MenuAsideComponentTestController);
    return MenuAsideComponentTestController;
}());
/* tslint:enable */
