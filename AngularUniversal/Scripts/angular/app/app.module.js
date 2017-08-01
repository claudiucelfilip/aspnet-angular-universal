"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var state_transfer_1 = require('@ngx-universal/state-transfer');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./components/app/app.component');
var about_component_1 = require('./components/about/about.component');
var contact_component_1 = require('./components/contact/contact.component');
var home_component_1 = require('./components/home/home.component');
var notfound_component_1 = require('./components/notfound/notfound.component');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                home_component_1.HomeComponent,
                notfound_component_1.NotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routesDeclarations,
                state_transfer_1.HttpTransferModule.forRoot()
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
