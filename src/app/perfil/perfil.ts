import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
usuario = {
  nombre: 'Kiara',
  edad: 20,
  ciudad: 'Rosario',
  hobby: 'Dibujar'
};
}
