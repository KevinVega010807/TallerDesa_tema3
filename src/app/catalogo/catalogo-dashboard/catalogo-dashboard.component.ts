import { Component, signal } from '@angular/core';

interface PeliculaCard {
  id: number;
  titulo: string;
  genero: string;
  anio: number;
  estreno: boolean;
  subtitulada: boolean;
}

@Component({
  selector: 'app-catalogo-dashboard',
  standalone: true,
  templateUrl: './catalogo-dashboard.component.html',
  styleUrls: ['./catalogo-dashboard.component.css']
})
export class CatalogoDashboardComponent {
  readonly generos = ['Todos', 'Acción', 'Drama', 'Comedia', 'Ciencia ficción', 'Animación'];

  readonly peliculas = signal<PeliculaCard[]>([
    { id: 1, titulo: 'Interestelar', genero: 'Ciencia ficción', anio: 2014, estreno: false, subtitulada: true },
    { id: 2, titulo: 'Coco', genero: 'Animación', anio: 2017, estreno: false, subtitulada: false },
    { id: 3, titulo: 'Mad Max: Furia en el camino', genero: 'Acción', anio: 2015, estreno: false, subtitulada: true },
    { id: 4, titulo: 'Dune: Parte Dos', genero: 'Ciencia ficción', anio: 2024, estreno: true, subtitulada: true },
    { id: 5, titulo: 'Intensamente 2', genero: 'Animación', anio: 2024, estreno: true, subtitulada: false },
    { id: 6, titulo: 'Whiplash', genero: 'Drama', anio: 2014, estreno: false, subtitulada: true },
    { id: 7, titulo: 'Superbad', genero: 'Comedia', anio: 2007, estreno: false, subtitulada: true },
    { id: 8, titulo: 'Oppenheimer', genero: 'Drama', anio: 2023, estreno: true, subtitulada: true }
  ]);
}
