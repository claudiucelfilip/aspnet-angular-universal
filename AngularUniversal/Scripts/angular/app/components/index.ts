import { AppComponent } from './app/app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';

export const componentsDeclaration = {
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        NotFoundComponent
    ]
};