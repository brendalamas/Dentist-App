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

  private apiUrl = 'http://localhost:3000/api/Pacientes';


  //Se obtiene el paciente por parametro dni
  getPacientebyDni(dni: string): Observable<Paciente> {
    return this._httpCliente.get<Paciente>(`${this.apiUrl}/${dni}`);
  }

  //Se obtiene todos los pacientes
  getPacientes(): Observable<Paciente[]> {
    return this._httpCliente.get<Paciente[]>(`${this.apiUrl}`);
  }

  //Se actuliza el diagnostico de un paciente
  putpacienteDiagnostico(dni: string,diagnostico:string): Observable<Paciente> {
    return this._httpCliente.put<Paciente>(`${this.apiUrl}/${dni}`,{ Diagnostico: diagnostico });
  }

}
