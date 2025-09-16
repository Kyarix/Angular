import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

interface Producto
{
  nombre: string;
  precio: number;
  stock: boolean;
  categoria: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})

export class Productos {
productos: Producto[] = [
  { nombre: 'Sushi Roll', precio: 7500, stock: true, categoria: 'Comida' },
  { nombre: 'Mouse Gamer', precio: 8000, stock: false, categoria: 'Electrónica' },
  { nombre: 'Cuaderno', precio: 1200, stock: true, categoria: 'Papelería' },
  { nombre: 'Auriculares', precio: 5000, stock: true, categoria: 'Electrónica' }
];
}
