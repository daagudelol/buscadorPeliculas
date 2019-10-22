import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styles: []
})
export class FavoritosComponent implements OnInit {

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit() {
  }
  clickPelicula(pelicula){
    if(this.isFavorito(pelicula)){
      this.favoritosService.quitarFavorito(pelicula);
    }else{
      this.favoritosService.agregarFavorito(pelicula);
    }

  }

  public isFavorito(pelicula: any){
    return this.favoritosService.isFavorito(pelicula.id);
  }

  public getFavoritos(){
    return this.favoritosService.obtenerFavoritos();
  }

}
