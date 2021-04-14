import { Repos } from './../classes/repos';
import { Users } from './../classes/users';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoName } from '../classes/repo-name';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  get(arg0: string): string {
    throw new Error('Method not implemented.');
  }
user:Users;
username:string;
repos: Repos[] = [];
reponame:string;
reposByName: RepoName[]=[];
response: any;

constructor(private http: HttpClient) {
  this.user = new Users("", "", "", "", 0, 0, 0, new Date(), "", "");

}
userInfoRequest(username: any) {
  interface userApiResponse {
    name: any;
    login: any;
    bio: any;
    url: any;
followers: any;
    following: any;
    public_repos: any; 
    created_at: Date;
    avatar_url: any;
    email: any;
  }
  let promise = new Promise<void>((resolve, reject) => {
    this.http.get<userApiResponse>(`${environment.ApiKey}${username}?access_token${username}?client_id=${environment.ApiKey}`).toPromise().then(response => {
      this.user.name = response.name
      this.user.login = response.login
      this.user.bio = response.bio
      this.user.url = response.url
      this.user.followers = response.followers
      this.user.following = response.following
      this.user.public_repos = response.public_repos
      this.user.created_at = response.created_at
      this.user.avatar_url = response.avatar_url
      this.user.email = response.email
      resolve()
        console.log(response)
      },
        error => {
          this.user.login = "User not found"
          console.log("an error occured")
          reject(error)
        })
    })
    return promise
  }
  userRepoRequest(reponame: any) {
    interface repoApiResponse {
      name: string,
      description: string,
      language: string,
      html_url: string
      forks:any,
    }
    let promise = new Promise<void>((resolve:any, reject:any) => {
      let arrayLength = this.repos.length;
      this.repos = [];
      this.http.get<any>(`${environment.ApiKey}${reponame}/repos`).toPromise().then((response: any | any[])=> {
       
        for (let i = 0; i < response.length; i++) {
          let repo = new Repos("", "", "", "", 0, new Date());
          repo.name = response[i]["name"]
          repo.description = response[i]["description"]
          repo.language = response[i]["language"]
          repo.html_url = response[i]["html_url"]
          repo.forks = response[i]["forks"]
          repo.updated_at = response[i]["updated_at"]
          this.repos.push(repo)
          resolve()
          console.log(repo)
        }
      },
        (      error: any) => {
        console.log("an error occured")
        reject(error)
      })
  })
return promise
}
repoSearchName(reponame: any) {
  interface repoByNameApiResponse {
    items: []
  }
  let promise = new Promise<void>((resolve, reject) => {
    let arrayLength = this.reposByName.length;
    for (let i = 0; i < arrayLength; i++) { 
      this.reposByName.pop()
    }
this.http.get<repoByNameApiResponse>(`${environment.Apirepo}${reponame}`).toPromise().then(response => {
      for (let i = 0; i < response.items.length; i++) {
        let repoByName = new RepoName("", "", "", "", 0, new Date());
        repoByName.name = response.items[i]["name"]
        repoByName.description = response.items[i]["description"]
        repoByName.language = response.items[i]["language"]
        repoByName.html_url = response.items[i]["html_url"]
        repoByName.forks = response.items[i]["forks"]
        repoByName.updated_at = response.items[i]["updated_at"]
        this.reposByName.push(repoByName)
      }
resolve()
    },
      error => { 
        console.log("an error occured")
        reject(error)
      })
  })
  return promise
}
}