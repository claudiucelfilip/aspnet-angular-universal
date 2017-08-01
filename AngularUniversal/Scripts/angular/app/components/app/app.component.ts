import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class AppComponent {
    text: string = 'Hello World';
    constructor() {
        setTimeout(() => {
            this.text = 'Bye World';
        }, 2000);
        
    }
}