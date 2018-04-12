import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseResult} from "../models/tvshows";
import {Observable} from "rxjs";

@Injectable()
export class MovieService {

  static moviesUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<ResponseResult[]> {
    if(!query.trim()) {
      return of([]);
    }
    return this.http.get<ResponseResult[]>(`${MovieService.moviesUrl}/search/shows?q=${query}`)
      .pipe(
        catchError(this.handleError<ResponseResult[]>('searchShows',[]))
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
