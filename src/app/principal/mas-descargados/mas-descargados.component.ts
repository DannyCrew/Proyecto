import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-mas-descargados',
  templateUrl: './mas-descargados.component.html',
  styleUrl: './mas-descargados.component.scss'
})
export class MasDescargadosComponent implements OnInit {
  public arregloDeJuegos: any[] = [];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    // Obtener todos los videojuegos
    this.gameService.obtenerVideojuegos().subscribe(videojuegos => {
      // Filtrar videojuegos con clasificación mayor a 100
      this.arregloDeJuegos = videojuegos.filter(videojuego => videojuego.downloads > 100);
    });
  }
}
