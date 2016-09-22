import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
    `
})
export class AppComponent {
    title = 'Hello World';
}
