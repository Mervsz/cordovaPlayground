import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bitcoin } from '../../model/bitcoin.model';

/*
  Generated class for the BitcoinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BitcoinProvider {

  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';
  constructor(private http: HttpClient) {
    console.log('Hello BitcoinProvider Provider');
  }

  getBitcoinPrice(currency: string) : Promise<any>{
    return new Promise(resolve => {
      this.http.get(`${this.ROOT_URL}${currency}`, {})
    .subscribe(data => {
      resolve(data);
    },
    err => {
      console.log(err);
    })
    }) 
    // return this.http.get<Bitcoin>(`${this.ROOT_URL}${currency}`)
  }
}
