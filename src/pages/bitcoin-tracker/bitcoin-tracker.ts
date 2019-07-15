import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { Bitcoin } from '../../model/bitcoin.model';


/**
 * Generated class for the BitcoinTrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bitcoin-tracker',
  templateUrl: 'bitcoin-tracker.html',
})
export class BitcoinTrackerPage {

  title: string = "Bitcoin Tracker"
  currency: string = 'GBP';
  bitcoin: Bitcoin;
  constructor(private bitcoinProvider: BitcoinProvider) {
  }

  ionViewWillLoad() {
    // Get the currency price
    this.getBitcoinPrice()
  }

   async getBitcoinPrice(){
     this.bitcoin = null
     let val: Bitcoin;
     try{
      val = await this.bitcoinProvider.getBitcoinPrice(this.currency);
      this.bitcoin = {
        ask: val.ask,
        averages: val.averages
      };

     }catch(err){
      console.log(err);
     }
    //  this.bitcoinProvider.getBitcoinPrice(this.currency).then(res => {
    //    console.log(res, "response test")
    //  })
    // console.log(this.bitcoin$);
  }

}
