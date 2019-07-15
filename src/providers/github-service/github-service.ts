import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { USER_LIST } from '../../mocks/user.mocks';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../../model/user.interface';
import { Repository } from '../../model/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';


/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  baseUrl: string = 'https://api.github.com/users';
  reposUrl: string = 'repos'

  constructor(public http: HttpClient) {
  }

  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
    .map((data: User) => data)
  }

  getRepositoryInformation(username: string): Observable<Repository[]>{
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .map((data: Repository[]) => data )
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repo => repo.owner.name === username))
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter((user: User) => user.name === username)[0]);
  }

}
