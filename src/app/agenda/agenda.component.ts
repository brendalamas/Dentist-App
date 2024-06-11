import { Component, OnInit } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { ApiPacientesService } from '../Api_pacientes/api-pacientes.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent implements OnInit {


  turnosList : Paciente[] = []
  turnosFiltrados: Paciente[] = [];

  constructor(private _apiService:ApiPacientesService){}
  ngOnInit(): void {
    this._apiService.getPacientes().subscribe({
      next:data=>{
        this.turnosList = data;
        this.turnosFiltrados = [...this.turnosList];  
      },
      error: err => {
        console.error('Error fetching turnos', err);
      }
    })
  }

  onDateClick(dia: number): void {
    const fecha = this.formatFecha(dia);
    this.turnosFiltrados = this.turnosList.filter(turno => turno.Fecha_Cons === fecha);
  }

  formatFecha(dia: number): string {
    const diaStr = dia < 10 ? `0${dia}` : `${dia}`;
    return `${diaStr}/06/2024`;
  }


}