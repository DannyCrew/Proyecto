import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { PrincipalModule } from './principal/principal.module';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        PrincipalModule,
        CommonModule,
        RouterModule,
        AuthModule
    ],
})
export class AppComponent {
  title = 'Mi-aplicacion';
  constructor(private router: Router){}
}
