import { Routes } from '@angular/router';
import { Mensajes } from './mensajes/mensajes';
import { Home } from './home/home';
import { Perfil } from './perfil/perfil';
import { Movies } from './pages/movies/movies';
import { Ejercicios } from './pages/ejercicios/ejercicios';

export const routes: Routes = [
    {path: 'mensajes', component: Mensajes}, {path: '', component: Home}, {path: 'perfil', component: Perfil},
    { path: '', redirectTo: 'ejercicios', pathMatch: 'full' },
  { path: 'ejercicios', component: Ejercicios },
  { path: 'pelis', component: Movies },
  { path: '**', redirectTo: 'ejercicios' }
];




