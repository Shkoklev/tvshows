import { Component, OnInit } from '@angular/core';
import {ResponseResult} from "../../models/tvshows";
import {Subject, Observable} from "rxjs";
import {MovieService} from "../../services/movie.service";
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  tvshows$: Observable<ResponseResult[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.tvshows$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string)=>this.movieService.search(query)),
    );
  }

  search(query: string) {
    this.searchTerms.next(query);
  }
}
