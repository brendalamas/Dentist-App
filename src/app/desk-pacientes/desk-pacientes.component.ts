import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiServiceService } from '../../../services/api.service.service';
import { IPaciente } from '../../../models/paciente.model';

@Component({
  selector: 'app-desk-pacientes',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './desk-pacientes.component.html',
  styleUrl: './desk-pacientes.component.css'
})

export class DeskPacientesComponent implements OnInit {

  pacientesList: IPaciente[] = [];

  constructor (private _apiService: ApiServiceService) {

  }

  ngOnInit(): void {
    this.getAllPacientes()
  }

  getAllPacientes () {
    this._apiService.getPacientes().subscribe({
      next: data => {
        console.log(data)
        this.pacientesList = data
      }, error: error => {
        console.log(error)
      }
    });
  }
}
