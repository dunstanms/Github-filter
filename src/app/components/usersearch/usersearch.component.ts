import { Router } from '@angular/router';
import { Repos } from './../../classes/repos';
import { SearchService } from './../../services/search.service';
import { Users } from './../../classes/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {
  username: any;
  user: Users;
  repos: Repos[];
  reponame: any;

  constructor(private searchService: SearchService, private router: Router) {
    this.username = localStorage.getItem("username");
  }
findProfile() {
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    this.searchService.userRepoRequest(this.username)
    this.repos = this.searchService.repos
    this.username = ''
  }
 
   
  
  findRepos() {
    localStorage.setItem("reponame", this.reponame);
    this.router.navigate(['/repositories']);
    this.reponame = ''
  }
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.username = this.username == null? "ubuntustan" : this.username
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    this.searchService.userRepoRequest("ubuntustan")
    this.repos = this.searchService.repos
  }

}