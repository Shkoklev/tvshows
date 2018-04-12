import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MovieSearchComponent} from "../pages/movie-search/movie-search.component";
import {MovieDetailsComponent} from "../pages/movie-details/movie-details.component";

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', component: MovieSearchComponent},
  { path: 'shows/:id', component: MovieDetailsComponent}
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
