import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { FavoritosService } from '../../services/favoritos.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  buscar:string = "";

  constructor(public _ps:PeliculasService, public route:ActivatedRoute, private favoritosService: FavoritosService) {
    this.route.params.subscribe(parametros=>{
      if(parametros['texto']){
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit() {
  }
  onKeydown(event) {
    console.log(event);
  }
  buscarPelicula(){
    if(this.buscar.length == 0){
      return;
    }

    this._ps.buscarPelicula(this.buscar).subscribe();
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
