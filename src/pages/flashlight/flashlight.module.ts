import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashlightPage } from './flashlight';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    FlashlightPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashlightPage),
    ComponentsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FlashlightPageModule {}
