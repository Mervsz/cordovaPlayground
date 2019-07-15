import { Component, Input } from '@angular/core';
import { User } from '../../model/user.interface';

/**
 * Generated class for the UserViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-view',
  templateUrl: 'user-view.html'
})
export class UserViewComponent {
  @Input() user: User;
  text: string;

  constructor() {
    console.log('Hello UserViewComponent Component');
    this.text = 'Hello World';
  }

}
