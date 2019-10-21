import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  buscar:string = "";

  constructor(public _ps:PeliculasService, public route:ActivatedRoute) {
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

}
