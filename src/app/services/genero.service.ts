import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Genero } from '../domain/genero domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GeneroService {
    private http = inject(HttpClient); 
  private url:string = environment.API_URL;
  generos = this.http.get<Genero[]>(`${this.url}generos`);

  constructor() {  }
  getGeneros(): Observable<Genero[]>{
    return this.generos;
  }

}
