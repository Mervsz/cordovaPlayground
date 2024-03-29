import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { BmiProvider } from '../../providers/bmi/bmi';
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    ComponentsModule
  ],
  providers:[BmiProvider]
})
export class TestPageModule {}
