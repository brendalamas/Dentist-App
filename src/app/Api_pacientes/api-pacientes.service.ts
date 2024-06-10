import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPacientesService {

  private _httpCliente = inject(HttpClient);
  constructor() { }

  private apiUrl = 'http://localhost:3000/api/Pacientes';

  getPaciente (dni?:string):Observable<any>{
    return this._httpCliente.get<any>(`${this.apiUrl}/${dni}`)
  }

  getPacientes(): Observable <any[]>{
    return this._httpCliente.get<any[]>(this.apiUrl);
  }

  updateDiagnosticoPaciente(dni:string,Diagnostico:string):Observable<any>{
    return this._httpCliente.patch<any>(`${this.apiUrl}/${dni}/diagnostico`,{ Diagnostico: Diagnostico })
  }

  
}
