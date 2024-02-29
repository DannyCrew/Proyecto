import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticationService } from '../../autentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginProd: AutenticationService, private router: Router) {}
  
  ngOnInit(): void {
      this.myForm = this.createMyForm();
  }
  private createMyForm(): FormGroup {
    return this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }
  public onSingin(): void{
    this.router.navigate(['/sing-in']);
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }
      const datosLogin = this.myForm.value;
      // Verificar credenciales en registros existentes
       // Llamar al servicio para verificar el inicio de sesión
    if (this.loginProd.ingresarAplicativo(datosLogin)) {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/home']);
      // Puedes realizar otras acciones después del inicio de sesión exitoso
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
    public get f(): any {
      return this.myForm.controls;
    }
}

