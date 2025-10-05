import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mensajes } from './mensajes/mensajes';
import { Perfil } from './perfil/perfil';
import { Productos } from './productos/productos';
import { Header } from './header/header';
import { Footer } from './footer/footer';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mensajes, Perfil, Productos, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-app');
}

