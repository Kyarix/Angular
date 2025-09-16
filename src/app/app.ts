import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mensajes } from './mensajes/mensajes';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mensajes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-app');
}

