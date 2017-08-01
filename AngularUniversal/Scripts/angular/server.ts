import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import { Type, NgModuleFactory, Provider, enableProdMode } from '@angular/core';
import { INITIAL_CONFIG } from '@angular/platform-server';
import { createServerRenderer, RenderResult } from 'aspnet-prerendering';

import { ngAspnetCoreEngine } from '@nguniversal/aspnetcore-engine';

import { AppServerModule } from './app/app.server.module';

enableProdMode();

function createTransferScript(transferData: Object): string {
    return `<script>window['TRANSFER_CACHE'] = ${JSON.stringify(transferData)};</script>`;
}

interface IEngineOptions {
    appSelector: string;
    request: IRequestParams;
    ngModule: Type<{}> | NgModuleFactory<{}>;
    providers?: Provider[];
};

interface IRequestParams {
    location: any;              // e.g., Location object containing information '/some/path'
    origin: string;             // e.g., 'https://example.com:1234'
    url: string;                // e.g., '/some/path'
    baseUrl: string;            // e.g., '' or '/myVirtualDir'
    absoluteUrl: string;        // e.g., 'https://example.com:1234/some/path'
    domainTasks: Promise<any>;
    data: any;                  // any custom object passed through from .NET
};

export default createServerRenderer(params => {
    const setupOptions: IEngineOptions = {
        appSelector: '<app></app>',
        ngModule: AppServerModule,
        request: params,
        providers: [
            /* Other providers you want to pass into the App would go here
            *    { provide: CookieService, useClass: ServerCookieService }
    
            * ie: Just an example of Dependency injecting a Class for providing Cookies (that you passed down from the server)
              (Where on the browser you'd have a different class handling cookies normally)
            */
        ]
    };

    return ngAspnetCoreEngine(setupOptions).then(response => {

        // Want to transfer data from Server -> Client?

        // Add transferData to the response.globals Object, and call createTransferScript({}) passing in the Object key/values of data
        // createTransferScript() will JSON Stringify it and return it as a <script> window.TRANSFER_CACHE={}</script>
        // That your browser can pluck and grab the data from
        response.globals.transferData = createTransferScript({
            someData: 'Transfer this to the client on the window.TRANSFER_CACHE {} object',
            fromDotnet: params.data.thisCameFromDotNET // example of data coming from dotnet, in HomeController
        });

        return ({
            html: response.html,
            globals: response.globals
        });

    });
});


//import { createServerRenderer } from 'aspnet-prerendering';

//export default createServerRenderer(function () {
//    return new Promise((resolve) => {
//        return resolve({
//            html: "hello world",
//            globals: {}
//        });
//    });
//});