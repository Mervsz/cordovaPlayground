import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string = "Home Page"
   name: string;

  constructor(public navCtrl: NavController, private toast : ToastController) {
    this.name = ""
  }

  toastName(name: string){
    this.toast.create({message: `Hello ${name}`, duration: 2000}).present()
  }

  navigateToBMI(){
    this.navCtrl.push('TestPage', {message: "sample"});
  }

}
