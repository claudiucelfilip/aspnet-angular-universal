const AotPlugin = require('@ngtools/webpack').AotPlugin;
const path = require('path');
module.exports = function (platform, aot) {
    var config = {
        tsConfigPath: './tsconfig.json',
        skipCodeGeneration: !aot
    };

    if (platform === 'client') {
        config = Object.assign({}, config, {
            entryModule: path.resolve('./app/app.browser.module#AppBrowserModule')
        });
    }

    if (platform === 'server') {
        config = Object.assign({}, config, {
            entryModule: path.resolve('./app/app.server.module#AppServerModule')
        });
    }

    var aotPlugin = new AotPlugin(config);

    // TEMPORARY fix for Windows 10 - will be gone when fixed
    aotPlugin._compilerHost._resolve = function (path_to_resolve) {
        path_1 = require("path");
        path_to_resolve = aotPlugin._compilerHost._normalizePath(path_to_resolve);
        if (path_to_resolve[0] == '.') {
            return aotPlugin._compilerHost._normalizePath(path_1.join(aotPlugin._compilerHost.getCurrentDirectory(), path_to_resolve));
        }
        else if (path_to_resolve[0] == '/' || path_to_resolve.match(/^\w:\//)) {
            return path_to_resolve;
        }
        else {
            return aotPlugin._compilerHost._normalizePath(path_1.join(aotPlugin._compilerHost._basePath, path_to_resolve));
        }
    };

    return aotPlugin;
}