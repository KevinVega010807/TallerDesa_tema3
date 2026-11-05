import { Routes } from '@angular/router';
import { PeliculaSearchComponent } from './peliculas/pelicula-search.component/pelicula-search.component';
import { PeliculaInsertReactiveComponent } from './peliculas/pelicula-insert-reactive.component/pelicula-insert-reactive.component';
import { CatalogoDashboardComponent } from './catalogo/catalogo-dashboard/catalogo-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoDashboardComponent },
  { path: 'buscar-pelicula', component: PeliculaSearchComponent },
  { path: 'insertar-pelicula', component: PeliculaInsertReactiveComponent },
];
