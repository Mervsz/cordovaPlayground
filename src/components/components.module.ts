import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular'
import { MainHeader } from './main-header/main-header';
import { UserViewComponent } from './user-view/user-view';
import { RepositoriesComponent } from './repositories/repositories';
@NgModule({
	declarations: [MainHeader,
    UserViewComponent,
    RepositoriesComponent],
	imports: [ IonicModule ],
	bootstrap: [ IonicApp ],
	exports: [ MainHeader,
    UserViewComponent,
    RepositoriesComponent ],
})
export class ComponentsModule {}
