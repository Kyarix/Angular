import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css'
})
export class MovieItem {
  @Input({ required: true}) movie!: Movie;
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie() {
    this.movieSelected.emit(this.movie.title);
  }

}
