import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GithubDataService } from 'src/app/services/github-data.service';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss']
})
export class UserRepoComponent implements OnInit {
  repos;
  owner;
  constructor( 
    private activatedRoute: ActivatedRoute,
    private dataService: GithubDataService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.owner = params.get('id');
      this.dataService.getAllUserRepo(this.owner)
        .subscribe(res => {
          this.repos = res;
        });
    });
  }

}
