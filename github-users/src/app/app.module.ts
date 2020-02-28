import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';

import { RouterModule, Routes } from '@angular/router';
import { UserRepoComponent } from './components/user-repo/user-repo.component';

const routes:Routes = [
	{path:'', component:GithubUsersComponent},
	{path: 'user-repo/:id', component: UserRepoComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent,
    UserRepoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
