import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
titulo = 'Sushi al Paso';
subtitulo = 'Pedidos para llevar';
}
