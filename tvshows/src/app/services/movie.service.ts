import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseResult, Show, Episode, Person} from "../models/tvshows";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";
import {catchError} from "rxjs/operators/catchError";

@Injectable()
export class MovieService {

  static moviesUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<ResponseResult[]> {
    return this.http.get<ResponseResult[]>(`${MovieService.moviesUrl}/search/shows?q=${query}`)
      .pipe(
        catchError(this.handleError<ResponseResult[]>('searchShows',[]))
      );
  }

  showDetails(id: number): Observable<Show> {
     return this.http.get<Show>(`${MovieService.moviesUrl}/shows/${id}`)
       .pipe(
         catchError(this.handleError<Show>(`getMovie id=${id}`))
       );
  }

  getEpisodes(id: number): Observable<Episode[]> {
     return this.http.get<Episode[]>(`${MovieService.moviesUrl}/seasons/${id}/episodes`)
       .pipe(
         catchError(this.handleError<Episode[]>('getEpisodes', []))
       );
  }

  getCast(id: number): Observable<Person[]> {
     return this.http.get<Person[]>(`${MovieService.moviesUrl}/shows/${id}/cast`)
       .pipe(
         catchError(this.handleError<Person[]>('getCast',[]))
       );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
