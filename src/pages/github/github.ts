import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service'
/**
 * Generated class for the GithubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-github',
  templateUrl: 'github.html',
})
export class GithubPage {
  title: string = "Github Profile Search"
  username: string;
  constructor(private navCtrl: NavController, private github: GithubServiceProvider) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad GithubPage');
  }

  getUserInformation(): void{
    this.navCtrl.push('GithubSearchPage',{
      username: this.username
    });
  }

}
