import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

/**
 * Generated class for the FlashlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {
  title: string = "Flashligh Controller"
  isOn : boolean;
  constructor(private flashlight: Flashlight, private platform: Platform) {
    this.platform.ready().then(()=>{
      this.updateFlashlightStatus();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }

  switchOn() {
    this.flashlight.switchOn();
    this.updateFlashlightStatus()

  }
  switchOff() {
    this.flashlight.switchOff();
    this.updateFlashlightStatus()

  }

  switchToggle(){
    this.flashlight.toggle();
    this.updateFlashlightStatus()
  }

  updateFlashlightStatus(){
    this.isOn = this.flashlight.isSwitchedOn();
  }  


}
