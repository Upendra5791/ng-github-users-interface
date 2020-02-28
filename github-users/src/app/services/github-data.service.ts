import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor(private http: HttpClient) { }

  /* Fetch the list of users from GitHub */
  getUserDetails() {
    const url = 'https://api.github.com/users';
    return this.http.get(url);
  }

  /* Fetch the list of repositories for a given user from GitHub */
  getAllUserRepo(id: string) {
    const url = `https://api.github.com/users/${id}/repos`;
    return this.http.get(url);
  }
}
