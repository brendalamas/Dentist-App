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
        "fechaNacimiento": "11/11/2000",
        "edad": 19,
        "genero": "Masculino",
        "dni": "23456789B",
        "fecha_cons": "04/06/2024",
        "razon_cons": "jaqueca crónica",
        "diagnostico": "Anemia",
        "usuario": "carlosl99",
        "cobertura": "no"
      },
      {
        "nombre": "Jose",
        "apellido": "García",
        "email": "garciapJose@hotmail.com",
        "telefono": 1146259852,
        "fechaNacimiento": "15/02/1979",
        "edad": 45,
        "genero": "Masculino",
        "dni": "14875423",
        "fecha_cons": "11/06/2024",
        "razon_cons": "Dolor abdominal",
        "diagnostico": "Gastritis",
        "usuario": "josega79",
        "cobertura": "si"
      },
      {
        "nombre": "Victoria",
        "apellido": "Azuaje",
        "email": "lasirenavicky@gmail.com",
        "telefono": 1145621128,
        "fechaNacimiento": "string",
        "edad": 32,
        "genero": "Femenino",
        "dni": "12744983",
        "fecha_cons": "03/09/1992",
        "razon_cons": "Falta de gusto",
        "diagnostico": "COVID",
        "usuario": "vickysi12",
        "cobertura": "no"
      },
      {
        "nombre": "Erica",
        "apellido": "Madrid",
        "email": "Ericama89@gmail.com",
        "telefono": 1183463966,
        "fechaNacimiento": "string",
        "edad": 27,
        "genero": "Femenino",
        "dni": "42561752",
        "fecha_cons": "10/02/2024",
        "razon_cons": "Alergia en el pecho",
        "diagnostico": "Dermatitis atópica",
        "usuario": "erica_españa",
        "cobertura": "si"
      },
      {
        "nombre": "Moana",
        "apellido": "Motunui",
        "email": "Momotunui@gmail.com",
        "telefono": 1142123942,
        "fechaNacimiento": "string",
        "edad": 16,
        "genero": "Femenino",
        "dni": "42561752",
        "fecha_cons": "10/02/2008",
        "razon_cons": "Dolor en la piel",
        "diagnostico": "Quemadura solar",
        "usuario": "princesa_87",
        "cobertura": "si"
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
