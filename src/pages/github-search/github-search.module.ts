import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GithubSearchPage } from './github-search';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { GithubServiceProvider } from '../../providers/github-service/github-service'


@NgModule({
  declarations: [
    GithubSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(GithubSearchPage),
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [GithubServiceProvider]
})
export class GithubSearchPageModule {}
