import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BmiProvider } from '../../providers/bmi/bmi';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  title: string = "BMI Calculator"
  weight: number;
  height: number;

  bmi: number;
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bmiProvider: BmiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
    this.message = this.navParams.get('message');
  }

  ionViewWillEnter(){
    console.log('ionWillEnter TestPage');
  }

  checkBMI(weight: number, height: number){
    this.bmi = this.bmiProvider.calculateBmi(weight, height);

    alert(this.bmi);
  }
}
