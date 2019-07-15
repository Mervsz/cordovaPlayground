import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service'
import { User } from '../../model/user.interface';
import { Repository } from '../../model/repository.interface';
/**
 * Generated class for the GithubSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-github-search',
  templateUrl: 'github-search.html',
})
export class GithubSearchPage {
  title: string = "Results"
  username: string;
  user: User;
  repos: Repository[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private github: GithubServiceProvider) {
  }

  getUser(user_name: string){
    this.github.getUserInformation(user_name).subscribe(data => this.user = data);
    this.github.getRepositoryInformation(user_name).subscribe(data => this.repos = data)
    // this.github.mockGetUserInformation(user_name).subscribe((data: User) => this.user = data);
    // this.github.mockGetRepositoryInformation(user_name).subscribe((repo: Repository[]) => this.repos = repo)
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    console.log(this.username, "usernmae output");
    if(this.username){
      this.getUser(this.username);
    }
    // console.log(' GithubSearchPage', this.username);
  }

}
