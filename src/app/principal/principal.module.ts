import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MasPopularesComponent } from './mas-populares/mas-populares.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddGamesComponent } from './add-games/add-games.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardGameComponent } from './card-game/card-game.component';
import { ProximamanteComponent } from './proximamante/proximamante.component';
import { MasDescargadosComponent } from './mas-descargados/mas-descargados.component';



@NgModule({
  declarations: [
    NavBarComponent,
    MasPopularesComponent,
    AddGamesComponent,
    CardGameComponent,
    MasPopularesComponent,
    ProximamanteComponent,
    MasDescargadosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    NavBarComponent,
    AddGamesComponent,
    CardGameComponent,
    MasPopularesComponent,
  ],
})
export class PrincipalModule { }
