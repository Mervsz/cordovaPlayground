import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module'
// import { MainHeader } from '../../components'
// import { MainHeaderV2Module } from '../../components/main-header-v2/main-header-v2.module'

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [ 
    IonicPageModule.forChild(HomePage),
    ComponentsModule
    // MainHeader
   ],
  exports: [],
  providers: [],
})
export class HomeModule {}        