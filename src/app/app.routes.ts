import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { NavBarComponent } from './principal/nav-bar/nav-bar.component';
import { MasPopularesComponent } from './principal/mas-populares/mas-populares.component';
import { AddGamesComponent } from './principal/add-games/add-games.component';
import { MasDescargadosComponent } from './principal/mas-descargados/mas-descargados.component';
import { ProximamanteComponent } from './principal/proximamante/proximamante.component';
 
export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'sing-in', component: SingInComponent},
    { path: 'home', component: NavBarComponent,
        children: [
            { path: 'add-game', component: AddGamesComponent},
            { path: 'Mas_populares', component: MasPopularesComponent},
            { path: 'Mas_descargados', component: MasDescargadosComponent},
            { path: 'proximamante', component: ProximamanteComponent},
    ]},
    { path: '' , redirectTo: 'login', pathMatch: 'full'},
    { path: '**', redirectTo: 'login'},

];


