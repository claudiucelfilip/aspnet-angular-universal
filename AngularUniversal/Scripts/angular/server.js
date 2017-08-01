"use strict";
require('zone.js/dist/zone-node');
require('reflect-metadata');
require('rxjs/Rx');
var core_1 = require('@angular/core');
var aspnet_prerendering_1 = require('aspnet-prerendering');
var aspnetcore_engine_1 = require('@nguniversal/aspnetcore-engine');
var app_server_module_1 = require('./app/app.server.module');
core_1.enableProdMode();
function createTransferScript(transferData) {
    return "<script>window['TRANSFER_CACHE'] = " + JSON.stringify(transferData) + ";</script>";
}
;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = aspnet_prerendering_1.createServerRenderer(function (params) {
    var setupOptions = {
        appSelector: '<app></app>',
        ngModule: app_server_module_1.AppServerModule,
        request: params,
        providers: []
    };
    return aspnetcore_engine_1.ngAspnetCoreEngine(setupOptions).then(function (response) {
        response.globals.transferData = createTransferScript({
            someData: 'Transfer this to the client on the window.TRANSFER_CACHE {} object',
            fromDotnet: params.data.thisCameFromDotNET
        });
        return ({
            html: response.html,
            globals: response.globals
        });
    });
});
