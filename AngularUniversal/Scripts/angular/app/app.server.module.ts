import { ServerStateTransferModule, StateTransferService }  from '@ngx-universal/state-transfer';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { AppComponent } from './components/app/app.component';


@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        ServerModule,
        ServerStateTransferModule.forRoot(),
        AppModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {
    constructor(private readonly stateTransfer: StateTransferService) {}

    ngOnBootstrap = () => {
        this.stateTransfer.inject();
    }
};