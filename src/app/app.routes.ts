import { Routes } from '@angular/router';
import { Mensajes } from './mensajes/mensajes';
import { Home } from './home/home';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [{path: 'mensajes', component: Mensajes}, {path: '', component: Home}, {path: 'perfil', component: Perfil}];




