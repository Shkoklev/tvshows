import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AlertModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../app.component";
import { MovieSearchComponent } from '../pages/movie-search/movie-search.component';
import { MovieDetailsComponent } from '../pages/movie-details/movie-details.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {MovieService} from "../services/movie.service";


@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieDetailsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      AlertModule.forRoot(),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
