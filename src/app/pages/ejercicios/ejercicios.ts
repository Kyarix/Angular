import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mensajes } from '../../mensajes/mensajes';
import { Perfil } from '../../perfil/perfil';
import { Productos } from '../../productos/productos';

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [CommonModule, Mensajes, Perfil, Productos],
  templateUrl: './ejercicios.html',
  styles: ``
})
export class Ejercicios {

}
