import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';

import { RouterModule, Routes } from '@angular/router';
import { UserRepoComponent } from './components/user-repo/user-repo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
