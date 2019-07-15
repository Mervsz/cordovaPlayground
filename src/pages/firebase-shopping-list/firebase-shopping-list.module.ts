import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseShoppingListPage } from './firebase-shopping-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FirebaseShoppingListPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseShoppingListPage),
    ComponentsModule
  ],
})
export class FirebaseShoppingListPageModule {}
