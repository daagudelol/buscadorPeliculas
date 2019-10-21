import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '87c67de37c7881ba455be345331310c3';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas:any[] = [];

  constructor(private jsonp: HttpClientJsonpModule,
    private http: HttpClient
  ) { }

  getCartelera(){

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7 );

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;

    return this.http.jsonp(`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`, "callback");
  }

  getPopulares() {
    /* const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK'); */

    return this.http.jsonp(`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`, "callback");
  }

  getPopularesNinos() {
    return this.http.jsonp(`${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`, "callback");
  }

  buscarPelicula(texto: string) {

    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(map((res:[]) => {

        this.peliculas = res['results'];
        return res['results'];

    }));

}
}
