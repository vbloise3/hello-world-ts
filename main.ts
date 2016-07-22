/**
 * Created by vincebloise on 6/11/16.
 */
///<reference path="./node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'hello-world',
    template: '<h1>Hello {{ name }}!</h1>'
})
class HelloWorldComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2, mo fo!!';
    }
}

bootstrap(HelloWorldComponent);