import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileGeneratorPage } from './file-generator';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    FileGeneratorPage,
  ],
  imports: [
    IonicPageModule.forChild(FileGeneratorPage),
    ComponentsModule
  ],
})
export class FileGeneratorPageModule {}
