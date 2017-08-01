"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var bootloader_1 = require('@angularclass/bootloader');
var app_browser_module_1 = require('./app/app.browser.module');
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_browser_module_1.AppBrowserModule);
}
exports.main = main;
bootloader_1.bootloader(main);
