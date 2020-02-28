import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor(private http: HttpClient) { }

  getUserDetails() {
    const url = 'https://api.github.com/users';
    return this.http.get(url);
  }

  getAllUserRepo(id) {
    const url = `https://api.github.com/users/${id}/repos`;
    return this.http.get(url);
  }
}
