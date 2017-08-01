"use strict";
var aspnet_prerendering_1 = require('aspnet-prerendering');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = aspnet_prerendering_1.createServerRenderer(function () {
    return new Promise(function (resolve) {
        return resolve({
            html: "hello world",
            globals: {}
        });
    });
});
