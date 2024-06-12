import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../interfaces/paciente';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiPacientesService } from '../../Services/api-pacientes.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [ CommonModule,RouterLink,FormsModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent implements OnInit {

  //Crea variables desde la interfaz de Paciente
  turnosList : Paciente[] = []
  //Crea un array vacio para los turnos filtrados
  turnosFiltrados: Paciente[] = [];

  constructor(private _apiService:ApiPacientesService){}

  //Al iniciar trae la lista de turnos 
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

  /**
   * 
   * @param dia 
   * Al hacer clic en un dia del calendario va a filtrar por ese dia en particular y buscar los turnos en esa fecha
   */
  onDateClick(dia: number): void {
    const fecha = this.formatFecha(dia);
    this.turnosFiltrados = this.turnosList.filter(turno => turno.Fecha_Cons === fecha);
  }

  /**
   * 
   * @param dia 
   * Va a formatear el dia escogido y agregarle el mm/yyyy  
   */
  formatFecha(dia: number): string {
    const diaStr = dia < 10 ? `0${dia}` : `${dia}`;
    return `${diaStr}/06/2024`;
  }


}
