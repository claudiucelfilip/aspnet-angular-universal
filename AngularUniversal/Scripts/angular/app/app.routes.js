"use strict";
var about_component_1 = require('./components/about/about.component');
var contact_component_1 = require('./components/contact/contact.component');
var home_component_1 = require('./components/home/home.component');
var notfound_component_1 = require('./components/notfound/notfound.component');
var router_1 = require('@angular/router');
var routes = [
    {
        path: 'songs/users',
        component: about_component_1.AboutComponent
    },
    {
        path: 'songs/New-Releases',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'songs',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: notfound_component_1.NotFoundComponent
    }
];
exports.routesDeclarations = router_1.RouterModule.forRoot(routes, { enableTracing: true });
