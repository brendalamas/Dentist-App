import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class ApiPacientesService {

  private _httpCliente = inject(HttpClient);
  constructor() { }

  //al probar con la direccion http://localhost:3000/api/Pacientes no se muestran los datos del calendario.
  private apiUrl = 'http://localhost:3000/Pacientes';

  getPaciente(dni: string): Observable<Paciente> {
    return this._httpCliente.get<Paciente>(`${this.apiUrl}/${dni}`);
  }

  getPacientes(): Observable<Paciente[]> {
    return this._httpCliente.get<Paciente[]>(this.apiUrl);
  }

  postPaciente(paciente: Paciente): Observable<Paciente> {
    return this._httpCliente.post<Paciente>(this.apiUrl, paciente);
  }
  
}