import { Component, OnInit } from '@angular/core';
import {ResponseResult, Show, Episode} from "../../models/tvshows";
import {Observable} from "rxjs";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  tvshow: Show;
  episodes: Episode[];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.movieService.showDetails(id).subscribe(response=>this.tvshow=response);
      this.movieService.getEpisodes(id).subscribe(response=>this.episodes=response);
  }

}
