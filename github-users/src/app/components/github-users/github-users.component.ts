import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {
  title = 'github-users';
  users;
  filteredUsers
  constructor(private dataService: GithubDataService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.dataService.getUserDetails()
      .subscribe(res => {
        this.users = res;
        this.filteredUsers = this.users;
      })
  }

  getUserRepo() {
    
  }

  filterByName(searchTerm) {
    console.log(searchTerm);
    if (searchTerm.length !== 0) {
      /* this.displayClearBtn = true; */
      this.filteredUsers = this.users.filter(user => user.login.toLowerCase().indexOf(searchTerm) > -1);
    } else {
      /* this.displayClearBtn = false; */
      this.filteredUsers= this.users;
    }
  }

}
