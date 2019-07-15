import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BitcoinTrackerPage } from './bitcoin-tracker';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components.module'
// import { MainHeader } from '../../components/main-header/main-header'

@NgModule({
  declarations: [
    BitcoinTrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(BitcoinTrackerPage),
    HttpClientModule,
    ComponentsModule
  ],
  providers:[BitcoinProvider],
})
export class BitcoinTrackerPageModule {}
