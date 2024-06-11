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

  getPaciente(dni: string): Observable<Paciente> {
    return this._httpCliente.get<Paciente>(`${this.apiUrl}/${dni}`);
  }

  getPacientes(): Observable<Paciente[]> {
    return this._httpCliente.get<Paciente[]>(this.apiUrl);
  }

  
}
