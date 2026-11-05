import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Genero } from '../../domain/genero domain';
import { Actor } from '../../domain/actor domain';
import { PeliculaService } from '../../services/pelicula.service';
import { ActorService } from '../../services/actor.service';
import { GeneroService } from '../../services/genero.service';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-pelicula-insert-reactive',
  styleUrl: './pelicula-insert-reactive.component.css',
  templateUrl: './pelicula-insert-reactive.component.html',
})
export class PeliculaInsertReactiveComponent implements OnInit {

  // ===== PROPIEDADES =====
  // Referencia al elemento HTML nativo <select>
  @ViewChild('actorSelect') actorSelectRef!: ElementRef<HTMLSelectElement>;
  peliculaForm!: FormGroup;
  generos: Genero[] = [];
  actoresDisponibles: Actor[] = [];
  actoresPelicula: Actor[] = [];
  selectedActorId: number | undefined; // ID del actor por agregar (SELECT)

  // ===== CONSTRUCTOR =====
  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private actorService: ActorService,
    private generoService: GeneroService) { }

  // ===== MÉTODOS =====
  ngOnInit(): void {
    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      subtitulada: [false],
      estreno: [false],
      genero: [null, Validators.required], // Usa un null para inicializar
      actores: [[], Validators.required]   // arreglo vacío de actores de la película
    });
    this.loadGeneros();
    this.loadActores();
  }

  loadGeneros() {
    this.generoService.getGeneros().subscribe({
      next: (data) => this.generos = data,
      error: (error) => console.error('Error loading generos:', error) // TODO *
    });
  }

  loadActores() {
    this.actorService.getActores().subscribe({
      next: (data) => this.actoresDisponibles = data,
      error: (error) => console.error('Error loading actores:', error) // TODO *
    });
  }

  onSubmit() {
    if (this.peliculaForm.valid) {
      console.log('Form Submitted! Data:', this.toJson());
      this.peliculaService.guardarPelicula(this.toJson()).subscribe({
        next: (response) => console.log('Pelicula saved:', response),   // TODO *
        error: (error) => console.error('Error saving pelicula:', error) // TODO *
      });
    } else {
      console.log('Form is invalid'); // TODO *
    }
  }

  toJson(): Object {
    const formValue = this.peliculaForm.value;
    let actores: { actorId: number }[] = [];
    actores = formValue.actores.map((actor: Actor) =>
      ({
        actorId: actor.actorId
      }));
    // retorno del objeto construido directamente
    return {
      titulo: formValue.titulo,
      subtitulada: formValue.subtitulada,
      estreno: formValue.estreno,
      genero: {
        generoId: formValue.genero
      },
      actores
    };
  }

  addActor() {
    if (this.selectedActorId) {
      const currentActors = this.peliculaForm.get('actores')?.value as Actor[];
      const actorToAdd = this.actoresDisponibles.find(actor => actor.actorId === this.selectedActorId);

      if (actorToAdd && !currentActors.some(actor => actor.actorId === this.selectedActorId)) {
        this.actoresPelicula.push(actorToAdd);
        this.peliculaForm.get('actores')?.setValue([...currentActors, actorToAdd]); // … spread operator
      }
    }
  }

  removeActor(actorIdToRemove?: number) {
    const currentActors = this.peliculaForm.get('actores')?.value as Actor[];
    const updatedActors = currentActors.filter(actor => actor.actorId !== actorIdToRemove);
    this.actoresPelicula = this.actoresPelicula.filter(actor => actor.actorId !== actorIdToRemove);
    this.peliculaForm.get('actores')?.setValue(updatedActors);
  }

  onActorSelectionChange(event: Event): void {
    // Target the select element and get its value
    const selectElement = event.target as HTMLSelectElement;
    this.selectedActorId = parseInt(selectElement.value);
    console.log('Selected ID on change:', this.selectedActorId);
  }
}