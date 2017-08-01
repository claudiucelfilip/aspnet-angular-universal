"use strict";
var app_component_1 = require('./app/app.component');
var about_component_1 = require('./about/about.component');
var contact_component_1 = require('./contact/contact.component');
var home_component_1 = require('./home/home.component');
var notfound_component_1 = require('./notfound/notfound.component');
exports.componentsDeclaration = {
    bootstrap: [
        app_component_1.AppComponent
    ],
    declarations: [
        app_component_1.AppComponent,
        about_component_1.AboutComponent,
        contact_component_1.ContactComponent,
        home_component_1.HomeComponent,
        notfound_component_1.NotFoundComponent
    ]
};
