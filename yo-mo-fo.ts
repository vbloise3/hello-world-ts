/**
 * Created by vincebloise on 7/21/16.
 */
///<reference path="./node_modules/angular2/typings/browser.d.ts"/>
import {Component} from '@angular/core';

@Component({
    selector: 'yo-mo-fo',
    template: '<h1>Hello {{ loser }}!</h1>'
})
class YoMoFoComponent {
    loser: string;

    constructor() {
        this.loser = 'mo-fo';
    }
}