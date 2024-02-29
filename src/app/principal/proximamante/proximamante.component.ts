import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-proximamante',
  templateUrl: './proximamante.component.html',
  styleUrl: './proximamante.component.scss'
})
export class ProximamanteComponent implements OnInit{
  public arregloDeJuegos: any[] = [];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    // Obtener todos los videojuegos
    this.gameService.obtenerVideojuegos().subscribe(videojuegos => {
      // Filtrar videojuegos con clasificación mayor a 4
      this.arregloDeJuegos = videojuegos.filter(videojuego => videojuego.upcoming = true);
    });
  }
}
