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
  users: any;
  filteredUsers: any;
  /* define the columns that needs to be displayed in the table */
  displayedColumns: string[] = ['id', 'avatar', 'name'];
  dataSource: any;

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
      });
  }

/* This method is used to implement filter with angular material */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
