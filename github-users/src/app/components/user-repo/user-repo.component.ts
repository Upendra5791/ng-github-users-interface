import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GithubDataService } from 'src/app/services/github-data.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss']
})
export class UserRepoComponent implements OnInit {
  repos;
  ownerDetails;
  dataSource;
  displayedColumns: string[] = ['name', 'desc' ];

  constructor( 
    private activatedRoute: ActivatedRoute,
    private dataService: GithubDataService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.dataService.getAllUserRepo(params.get('id'))
        .subscribe(res => {
          this.repos = res;
          this.dataSource = new MatTableDataSource(this.repos);
          const userSample = this.repos[0];
          this.ownerDetails = userSample.owner;
        });
    });
  }

}
