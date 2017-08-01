"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var state_transfer_1 = require('@ngx-universal/state-transfer');
var platform_browser_1 = require('@angular/platform-browser');
var platform_server_1 = require('@angular/platform-server');
var core_1 = require('@angular/core');
var app_module_1 = require('./app.module');
var app_component_1 = require('./components/app/app.component');
var AppServerModule = (function () {
    function AppServerModule(readonly, StateTransferService) {
        var _this = this;
        if (readonly === void 0) { readonly = stateTransfer; }
        this.readonly = readonly;
        this.ngOnBootstrap = function () {
            _this.stateTransfer.inject();
        };
    }
    AppServerModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({
                    appId: 'my-app-id'
                }),
                platform_server_1.ServerModule,
                state_transfer_1.ServerStateTransferModule.forRoot(),
                app_module_1.AppModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppServerModule);
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;
;
