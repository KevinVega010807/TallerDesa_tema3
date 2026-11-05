import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pelicula } from '../domain/pelicula domain';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private apiURL = `${environment.API_URL}peliculas`;

  constructor(private http: HttpClient) { }

  guardarPelicula(pelicula: any): Observable<any> {
    return this.http.post<any>(this.apiURL, pelicula);
  }

  findMovies(titulo: string = '', genero: string = ''): Observable<Pelicula[]> {
    const params = new HttpParams()
      .set('titulo', titulo ?? '')
      .set('genero', genero ?? '');

    console.log(this.apiURL);

    return this.http.get<Pelicula[] | null>(this.apiURL, { params })
      .pipe(map(response => response ?? []));
  }
}