import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MovieItem } from '../movie-item/movie-item';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor, NgIf, MovieItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  movies: Movie[] = [
  { title: 'The Perks of Being a Wallflower', year: 2012, description: 'Adolescencia, amistad y autodescubrimiento.' },
  { title: 'La La Land', year: 2016, description: 'Sueños vs. amor.' },
  { title: 'Whiplash', year: 2014, description: 'Perfeccionismo y sacrificio.' },
  { title: 'The Lord of the Rings', year: 2001, description: 'Amistad, valentía y la lucha contra la oscuridad.' },
  { title: 'Your Name', year: 2016, description: 'Conexiones que trascienden el tiempo.' },
  { title: 'Spirited Away', year: 2001, description: 'Crecimiento y mundo fantástico.' },
  { title: 'The Social Network', year: 2010, description: 'Ambición y traición.' },
  { title: 'Harry Potter and the Sorcerer\'s Stone', year: 2001, description: 'Magia, amistad y destino.' },
  { title: 'Pirates of the Caribbean: The Curse of the Black Pearl', year: 2003, description: 'Aventura, libertad y leyendas en el mar.' },
  { title: 'Parasite', year: 2019, description: 'Clases sociales y tensión.' }
];

selectedMovie: string | null = null;

onMovieSelected(title: string) {
  this.selectedMovie = title;
}
}
