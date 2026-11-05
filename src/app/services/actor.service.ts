import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Actor } from '../domain/actor domain';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private apiURL = `${environment.API_URL}actores`;

  constructor(private http: HttpClient) { }

  getActores(): Observable<Actor[]> {
    return this.http.get<Actor[] | null>(this.apiURL)
      .pipe(map(response => response ?? []));
  }
}