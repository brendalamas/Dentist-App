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
    this.getPacientes();
    /* this.Pacientes = [
      {
        "Nombre": "Diego Luongo",
        "Edad": 24,
        "Sexo": "Masculino",
        "Fecha_Cons": "12-09-23",
        "Razon_Cons": "Dolor de pie",
        "Diagnostico": "El sujeto esta loco, no tiene pies",
        "Dni": "54505405"
      },
      {
        "Nombre": "Elsa Pato",
        "Edad": 45,
        "Sexo": "Femenino",
        "Fecha_Cons": "12-02-21",
        "Razon_Cons": "Dolor de muela",
        "Diagnostico": " Esta llena de carries",
        "Dni": "12131312"
      },
      {
        "Nombre": "Tucu Mano",
        "Edad": 22,
        "Sexo": "Masculino",
        "Fecha_Cons": "12-12-2023",
        "Razon_Cons": "BOVEEEEEEER",
        "Diagnostico": "En Argentina nací Tierra de Diego y Lionel De los pibes de Malvinas Que jamás olvidaré No te lo puedo explicar Porque no vas a entender Las finales que perdimos Cuántos años la lloré Pero eso se terminó Porque en el Maracaná La final con los brazucas La volvió a ganar papá Muchachos Ahora nos volvimo' a ilusionar Quiero ganar la tercera Quiero ser campeón mundial Y el Diego En el cielo lo podemos ver Con Don Diego y con La Tota Alentándolo a Lionel",
        "Dni": "fdsdsds"
      }
    ]; */
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
