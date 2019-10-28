import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {
  pelicula:any;
  regresar:any;

  constructor(public _ps:PeliculasService, public route:ActivatedRoute) {
    this.route.params.subscribe(parametros=>{
        this.regresar = parametros['pag'];
        //console.log(parametros);
        this._ps.getPelicula(parametros['id'])
            .subscribe( pelicula => {
              console.log(pelicula)
              this.pelicula=pelicula
            })


    })
  }

  ngOnInit() {
  }

}
