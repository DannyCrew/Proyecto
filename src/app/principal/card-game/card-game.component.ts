import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.scss'
})
export class CardGameComponent {
  @Input() videojuego: any;
  constructor(){}
}
