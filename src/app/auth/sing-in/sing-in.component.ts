import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticationService } from '../../autentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss'
})
export class SingInComponent implements OnInit{
  public myForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private registerProd: AutenticationService, private router:Router) {}
  
  ngOnInit(): void {
      this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      CPassword: ['', [Validators.required]]
    });
  }
  public submitFormulario(){
    if (this.myForm.invalid) {
      alert('Ingresa todos los campos del registro');
      return;
    }
    const datosRegistro = this.myForm.value;
     // Llamar al servicio para registrar el usuario
     this.registerProd.registrarUsuario(datosRegistro);


    // Resto de la lógica si es necesario
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    //navegar al login
    this.router.navigate(['/login']);
  }

  public get f(): any {
    return this.myForm.controls;
  }
}
