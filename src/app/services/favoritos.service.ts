import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor() {
    if(localStorage.getItem("FAVORITOS") == null){
      let array = [];
      localStorage.setItem("FAVORITOS", array.join());
    }

  }

  agregarFavorito(pelicula: any){
    let storage = localStorage.getItem("FAVORITOS");
    let favoritos =  storage === '' ? [] : JSON.parse(storage);
    if(favoritos.filter((rs: any) => rs.id === pelicula.id).length == 0){
      favoritos.push(pelicula);
      localStorage.setItem("FAVORITOS", JSON.stringify(favoritos));
    }
  }

  quitarFavorito(pelicula: any){
    let storage = localStorage.getItem("FAVORITOS");
    let favoritos =  storage === '' ? [] : JSON.parse(storage);

    for( let i = 0; i < favoritos.length; i++){
      if ( favoritos[i].id === pelicula.id) {
        favoritos.splice(i, 1);
      }
   }
    localStorage.setItem("FAVORITOS", JSON.stringify(favoritos));
  }

  obtenerFavoritos(){
    let storage = localStorage.getItem("FAVORITOS");
    return storage === '' ? [] : JSON.parse(storage);
  }

  isFavorito(idPelicula: any){
    let storage = localStorage.getItem("FAVORITOS");
    let favoritos =  storage === '' ? [] : JSON.parse(storage);
    return favoritos.filter((rs: any) => rs.id === idPelicula).length > 0;
  }

}
