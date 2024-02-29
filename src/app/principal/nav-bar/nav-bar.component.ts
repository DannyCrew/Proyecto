import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../../games.service';
import { error } from 'console';
import { AutenticationService } from '../../autentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  constructor(private gamesService: GamesService, private router: Router, private authService: AutenticationService){}
  ngOnInit(): void {
      
  }
  onLogout(): void {
    // Realiza cualquier lógica de logout necesaria (por ejemplo, limpiar el token de autenticación)
  
    // Redirige al usuario al componente de login
    this.router.navigate(['/login']);
  }
  public mostrarMasPopulares(): void{
        console.log('Error al obtener videojuegos mas populares:');
      }
      
    
  }
