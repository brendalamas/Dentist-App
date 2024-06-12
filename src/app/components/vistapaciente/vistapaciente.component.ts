import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../interfaces/paciente';
import { ActivatedRoute } from '@angular/router';
import { ApiPacientesService } from '../../Services/api-pacientes.service';

@Component({
  selector: 'app-vistapaciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vistapaciente.component.html',
  styleUrl: './vistapaciente.component.css'
})
export class VistapacienteComponent implements OnInit {
  paciente?: Paciente;
  nuevoDiagnostico: string = '';
  loading: boolean = true;

  constructor(private Apipacientes:ApiPacientesService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log("HOLA ESOTY ACAAAAAA") // Comentario que se utilizo de prueba para ver si recibia al paciente

    //Ni bien inicia se obtiene un parametro - este parametro es el dni
    this.route.params.subscribe({
      next: params => {
        //Se ejecuta el endpoint del servicio y se pasa el parametro del dni que se recibio

        this.Apipacientes.getPacientebyDni(params['pacienteDni']).subscribe({
          next: data => {
            //se carga el paciente y la vista del complemento
            this.paciente = data;
            console.log(this.paciente);
            this.loading = false;
          }, error: error => {
            console.log(error);
          }
        })
      }, error: error => {
        console.log(error);
      }
    });
  }

  actualizarCambios(dni: string, diagnostico: string): void {
    //le paso los parametros que obtengo del html
    this.Apipacientes.putpacienteDiagnostico(dni, diagnostico).subscribe({
      next: () => {
        console.log('Diagnóstico actualizado correctamente');
        location.reload();
      },
      error: error => {
        console.error('Error al actualizar diagnóstico:', error);
      }
    });
  }
  
  


}

