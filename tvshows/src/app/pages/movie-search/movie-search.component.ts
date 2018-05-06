import { Component, OnInit } from '@angular/core';
import {ResponseResult} from "../../models/tvshows";
import {Subject, Observable} from "rxjs";
import {MovieService} from "../../services/movie.service";
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  tvshows$: Observable<ResponseResult[]>;
 // private searchTerms = new Subject<string>();
  queryName: string;

  constructor(private movieService: MovieService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.filter(params => params.name)
      .subscribe(params => this.queryName = params.name);
    /* this.tvshows$ = this.searchTerms.pipe(
     debounceTime(300),
     distinctUntilChanged(),
     switchMap((query: string)=>this.movieService.search(query)),
     );
     */
    this.movieService.search(this.queryName)
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(response => this.tvshows$ = response);
  }

  search(query: string) {
   // this.searchTerms.next(query);
    this.movieService.search(this.queryName)
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(response => this.tvshows$ = response);
  }
}
