import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

