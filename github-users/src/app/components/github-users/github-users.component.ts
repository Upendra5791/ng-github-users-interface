import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {
  title = 'github-users';
  users;
  filteredUsers;
  displayedColumns: string[] = ['id', 'avatar', 'name'];
  dataSource;
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
        this.dataSource = new MatTableDataSource(this.filteredUsers);
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

/*   filterByName(searchTerm) {
    console.log(searchTerm);
    if (searchTerm.length !== 0) {
      this.filteredUsers = this.users.filter(user => user.login.toLowerCase().indexOf(searchTerm) > -1);
    } else {
      this.filteredUsers= this.users;
    }
  } */

}
