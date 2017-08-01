import { BrowserStateTransferModule } from '@ngx-universal/state-transfer';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppComponent } from './components/app/app.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        BrowserStateTransferModule.forRoot(),
        AppModule
    ],
    bootstrap: [AppComponent]
})
export class AppBrowserModule {
};