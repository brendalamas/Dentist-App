import { Component, OnInit } from '@angular/core';

import { Paciente } from '../../interfaces/paciente';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiPacientesService } from '../../Services/api-pacientes.service';

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
    //this.getPacientes();
     this.Pacientes = [
      {
        "nombre": "Carlos",
        "apellido": "López",
        "email": "carlos@gmail.com",
        "telefono": 1158596966,
        "fechaNacimiento": "string",
        "edad": 45,
        "genero": "Masculino",
        "dni": "23456789B",
        "fecha_cons": "11/06/2024",
        "razon_cons": "Dolor abdominal",
        "diagnostico": "Gastritis",
        "usuario": "carlosl99",
        "cobertura": "no"
      },
      {
        "nombre": "Carlos",
        "apellido": "López",
        "email": "carlos@gmail.com",
        "telefono": 1158596966,
        "fechaNacimiento": "string",
        "edad": 45,
        "genero": "Masculino",
        "dni": "23456789B",
        "fecha_cons": "11/06/2024",
        "razon_cons": "Dolor abdominal",
        "diagnostico": "Gastritis",
        "usuario": "carlosl99",
        "cobertura": "no"
      },
      {
        "nombre": "Carlos",
        "apellido": "López",
        "email": "carlos@gmail.com",
        "telefono": 1158596966,
        "fechaNacimiento": "string",
        "edad": 45,
        "genero": "Masculino",
        "dni": "23456789B",
        "fecha_cons": "11/06/2024",
        "razon_cons": "Dolor abdominal",
        "diagnostico": "Gastritis",
        "usuario": "carlosl99",
        "cobertura": "no"
      },
      {
        "nombre": "Carlos",
        "apellido": "López",
        "email": "carlos@gmail.com",
        "telefono": 1158596966,
        "fechaNacimiento": "string",
        "edad": 45,
        "genero": "Masculino",
        "dni": "23456789B",
        "fecha_cons": "11/06/2024",
        "razon_cons": "Dolor abdominal",
        "diagnostico": "Gastritis",
        "usuario": "carlosl99",
        "cobertura": "no"
      }
    ]; 
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
