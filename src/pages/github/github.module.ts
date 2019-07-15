import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GithubPage } from './github';
import { ComponentsModule } from '../../components/components.module';
import { GithubServiceProvider } from '../../providers/github-service/github-service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GithubPage,
  ],
  imports: [
    IonicPageModule.forChild(GithubPage),
    HttpClientModule,
    ComponentsModule
  ],
  providers: [ GithubServiceProvider ]
})
export class GithubPageModule {}
