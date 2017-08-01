import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'songs/users',
        component: AboutComponent
    },
    {
        path: 'songs/New-Releases',
        component: ContactComponent
    },
    {
        path: 'songs',
        component: HomeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const routesDeclarations = RouterModule.forRoot(
    routes,
    { enableTracing: true }
);