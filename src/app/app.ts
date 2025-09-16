import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mensajes } from './mensajes/mensajes';
import { Perfil } from './perfil/perfil';
import { Productos } from './productos/productos';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mensajes, Perfil, Productos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-app');
}

