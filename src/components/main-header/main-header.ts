import { Component, Input } from '@angular/core';

/**
 * Generated class for the MainHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'main-header',
  templateUrl: 'main-header.html'
})
export class MainHeader {
   @Input() title: string

  text: string;
  constructor() {
    console.log('Hello MainHeaderComponent Component');
    this.text = 'Hello World';
  }

}
