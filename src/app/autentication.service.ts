import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  private registros: any[] = [];

  constructor(private storageService: StorageService) {
    this.registros = this.storageService.get('registros') || [];

  }

  public ingresarAplicativo(datosLogin: any): boolean {
    // Verificar si hay algún registro que coincida con los datos de inicio de sesión
    const usuarioValido = this.registros.some(registro =>
      registro.email === datosLogin.email && registro.password === datosLogin.password
    );
    return usuarioValido;
  }
  // Nuevo método para manejar el registro
  public registrarUsuario(datosRegistro: any): void {
  // Agregar nuevo registro al array de registros
  this.registros.push(datosRegistro);

  // Guardar registros actualizados en localStorage
  this.storageService.set('registros', this.registros);
  }

  // Método para obtener todos los registros almacenados
  public obtenerRegistros(): any[] {
  return this.registros;
  }
}