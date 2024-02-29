import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GamesStorageService } from './games-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private gamesStorageService: GamesStorageService) {}

  public guardarVideojuego(videojuego: any): void {
    this.gamesStorageService.guardarVideojuego(videojuego);
  }

  public obtenerVideojuegos(): Observable<any[]> {
    return of(this.gamesStorageService.obtenerVideojuegos());
  }
}
