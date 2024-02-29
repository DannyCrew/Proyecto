import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrl: './add-games.component.scss'
})
export class AddGamesComponent implements OnInit {
  public myFormaddgames!: FormGroup;
  
  constructor(private fgames: FormBuilder, private gameService: GamesService){}
  ngOnInit(): void {
    this.myFormaddgames = this.createMyForm();
  }
  public createMyForm(): FormGroup {
    return this.fgames.group({
      title: ['', [Validators.required]],
      classification: ['0', [Validators.required]],
      description: ['', [Validators.required]],
      releaseDate: ['', [Validators.required]],
      downloads: ['0', [Validators.required]],
      upcoming: [false]
    });
  }
  public submitFormulario(): void {
    if (this.myFormaddgames.invalid) {
      alert('Ingresa todos los campos del formulario');
      return;
    }
    const nuevoVideojuego = this.myFormaddgames.value;

    // Guardar el videojuego utilizando el servicio
    this.gameService.guardarVideojuego(nuevoVideojuego);
    console.log('Nuevo Videojuego:', nuevoVideojuego);

    alert('Videojuego agregado exitosamente.');
    // Vaciar el formulario después de agregar el juego
    this.myFormaddgames.reset();
  }

  public get f(): any {
    return this.myFormaddgames.controls;
  }
}
