import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './mensajes.html',
  styleUrl: './mensajes.css'
})
export class Mensajes {

mensaje1: string = "Hola, bienvenido a mi aplicación Angular!";
mensaje2: string = "Este es un mensaje de ejemplo para mostrar en la interfaz.";
mostrar: boolean = false;

Mostrar() {
  this.mostrar = !this.mostrar;
}
}
