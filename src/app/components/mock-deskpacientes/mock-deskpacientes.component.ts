import { Component, OnInit } from '@angular/core';
import { ApiPacientesService } from '../../Api_pacientes/api-pacientes.service';
import { Paciente } from '../../interfaces/paciente';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mock-deskpacientes',
  standalone: true,
  imports: [ CommonModule,RouterLink,FormsModule],
  templateUrl: './mock-deskpacientes.component.html',
  styleUrl: './mock-deskpacientes.component.css'
})
export class MockDeskpacientesComponent implements OnInit {
  constructor(private apiPacientes: ApiPacientesService) { }

  Pacientes: Paciente[] = [];

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes() {
    this.apiPacientes.getPacientes().subscribe({
      next: data => {
        console.log(data);
        this.Pacientes = data;
      }, error: error => {
        console.log(error);
      }
    })
  }


}
