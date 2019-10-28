import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'pelicula/:id/:pag', component: PeliculaComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

