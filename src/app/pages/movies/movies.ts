import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieList } from '../../movies/movie-list/movie-list';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieList],
  templateUrl: './movies.html',
  styles: ``
})
export class Movies {

}
