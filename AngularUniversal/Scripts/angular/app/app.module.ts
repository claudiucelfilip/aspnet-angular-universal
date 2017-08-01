import { HttpTransferModule } from '@ngx-universal/state-transfer';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { routesDeclarations } from './app.routes';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        routesDeclarations,
        HttpTransferModule.forRoot()
    ]
    
})
export class AppModule {

}
