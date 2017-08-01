/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.browser.module';
import * as i2 from './components/about/about.component.ngfactory';
import * as i3 from './components/contact/contact.component.ngfactory';
import * as i4 from './components/home/home.component.ngfactory';
import * as i5 from './components/notfound/notfound.component.ngfactory';
import * as i6 from '@angular/common';
import * as i7 from '@angular/platform-browser';
import * as i8 from '@ngx-universal/state-transfer/src/state-transfer.service';
import * as i9 from '@ngx-universal/state-transfer/index';
import * as i10 from '@ngx-universal/state-transfer/src/server-state-transfer.service';
import * as i11 from '@ngx-universal/state-transfer/src/http-transfer.service';
import * as i12 from '@angular/http';
import * as i13 from '@angular/router';
import * as i14 from './components/about/about.component';
import * as i15 from './components/contact/contact.component';
import * as i16 from './components/home/home.component';
import * as i17 from './components/notfound/notfound.component';
import * as i18 from './app.module';
export const AppBrowserModuleNgFactory:i0.NgModuleFactory<i1.AppBrowserModule> = i0.ɵcmf(i1.AppBrowserModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.AboutComponentNgFactory,i3.ContactComponentNgFactory,i4.HomeComponentNgFactory,
              i5.NotFoundComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i6.NgLocalization,
              i6.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.IterableDiffers,
              i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i7.DomSanitizer,i7.ɵe,[i6.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i7.DomSanitizer]),i0.ɵmpd(4608,i7.HAMMER_GESTURE_CONFIG,
              i7.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i7.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i7.ɵDomEventsPlugin(p0_0),new i7.ɵKeyEventsPlugin(p1_0),
                    new i7.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i6.DOCUMENT,i6.DOCUMENT,i6.DOCUMENT,i7.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i7.EventManager,i7.EventManager,[i7.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i7.ɵDomSharedStylesHost,i7.ɵDomSharedStylesHost,[i6.DOCUMENT]),
          i0.ɵmpd(4608,i7.ɵDomRendererFactory2,i7.ɵDomRendererFactory2,[i7.EventManager,
              i7.ɵDomSharedStylesHost]),i0.ɵmpd(6144,i0.RendererFactory2,(null as any),
              [i7.ɵDomRendererFactory2]),i0.ɵmpd(6144,i7.ɵSharedStylesHost,(null as any),
              [i7.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i0.Testability,i0.Testability,
              [i0.NgZone]),i0.ɵmpd(4608,i7.Meta,i7.Meta,[i6.DOCUMENT]),i0.ɵmpd(4608,
              i7.Title,i7.Title,[i6.DOCUMENT]),i0.ɵmpd(5120,i8.StateTransferService,
              i9.stateTransferFactory,[i10.STATE_ID]),i0.ɵmpd(4608,i11.HttpTransferService,
              i11.HttpTransferService,[i12.Http,i8.StateTransferService]),i0.ɵmpd(5120,
              i13.ActivatedRoute,i13.ɵf,[i13.Router]),i0.ɵmpd(4608,i13.NoPreloading,
              i13.NoPreloading,([] as any[])),i0.ɵmpd(6144,i13.PreloadingStrategy,
              (null as any),[i13.NoPreloading]),i0.ɵmpd(135680,i13.RouterPreloader,
              i13.RouterPreloader,[i13.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i13.PreloadingStrategy]),i0.ɵmpd(4608,i13.PreloadAllModules,
              i13.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i13.ROUTER_INITIALIZER,
              i13.ɵi,[i13.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i13.ROUTER_INITIALIZER]),i0.ɵmpd(512,i6.CommonModule,i6.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i7.ɵa,([] as any[])),i0.ɵmpd(1024,
              i0.NgProbeToken,() => {
                return [i13.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i13.ɵg,i13.ɵg,[i0.Injector]),i0.ɵmpd(256,
              i0.APP_ID,'my-app-id',([] as any[])),i0.ɵmpd(2048,i7.ɵTRANSITION_ID,
              (null as any),[i0.APP_ID]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,
              p0_1:any,p1_0:any,p2_0:any,p2_1:any,p2_2:any) => {
            return [i7.ɵc(p0_0,p0_1),i13.ɵh(p1_0),i7.ɵf(p2_0,p2_1,p2_2)];
          },[[2,i7.NgProbeToken],[2,i0.NgProbeToken],i13.ɵg,i7.ɵTRANSITION_ID,i6.DOCUMENT,
              i0.Injector]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i7.BrowserModule,
              i7.BrowserModule,[[3,i7.BrowserModule]]),i0.ɵmpd(512,i9.BrowserStateTransferModule,
              i9.BrowserStateTransferModule,[[3,i9.BrowserStateTransferModule]]),i0.ɵmpd(1024,
              i13.ɵa,i13.ɵd,[[3,i13.Router]]),i0.ɵmpd(512,i13.UrlSerializer,i13.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i13.ChildrenOutletContexts,i13.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i13.ROUTER_CONFIGURATION,{enableTracing:true},
              ([] as any[])),i0.ɵmpd(1024,i6.LocationStrategy,i13.ɵc,[i6.PlatformLocation,
              [2,i6.APP_BASE_HREF],i13.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i6.Location,
              i6.Location,[i6.LocationStrategy]),i0.ɵmpd(512,i0.Compiler,i0.Compiler,
              ([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,
              [i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i13.ROUTES,
              () => {
                return [[{path:'songs/users',component:i14.AboutComponent},{path:'songs/New-Releases',
                    component:i15.ContactComponent},{path:'songs',component:i16.HomeComponent},
                    {path:'**',component:i17.NotFoundComponent}]];
              },([] as any[])),i0.ɵmpd(1024,i13.Router,i13.ɵe,[i0.ApplicationRef,i13.UrlSerializer,
              i13.ChildrenOutletContexts,i6.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i13.ROUTES,i13.ROUTER_CONFIGURATION,[2,i13.UrlHandlingStrategy],
              [2,i13.RouteReuseStrategy]]),i0.ɵmpd(512,i13.RouterModule,i13.RouterModule,
              [[2,i13.ɵa],[2,i13.Router]]),i0.ɵmpd(512,i9.HttpTransferModule,i9.HttpTransferModule,
              [[3,i9.HttpTransferModule]]),i0.ɵmpd(512,i18.AppModule,i18.AppModule,
              ([] as any[])),i0.ɵmpd(512,i1.AppBrowserModule,i1.AppBrowserModule,([] as any[])),
          i0.ɵmpd(256,i10.STATE_ID,'STATE',([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiSTovQW5ndWxhclVuaXZlcnNhbC9Bbmd1bGFyVW5pdmVyc2FsL1NjcmlwdHMvYW5ndWxhci9hcHAvYXBwLmJyb3dzZXIubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0k6L0FuZ3VsYXJVbml2ZXJzYWwvQW5ndWxhclVuaXZlcnNhbC9TY3JpcHRzL2FuZ3VsYXIvYXBwL2FwcC5icm93c2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
