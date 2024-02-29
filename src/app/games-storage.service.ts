import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesStorageService {
  private storageKey = 'videojuegos';
  constructor() { }
  public guardarVideojuego(videojuego: any): void {
    const games: any[] = this.obtenerVideojuegos();
    games.push(videojuego);
    this.actualizarLocalStorage(games);
  }

  public obtenerVideojuegos(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private actualizarLocalStorage(games: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(games));
  }
  
}
