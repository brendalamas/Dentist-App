import { Component, OnInit } from '@angular/core';
import { ApiPacientesService } from '../../Api_pacientes/api-pacientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../interfaces/paciente';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-vistapaciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vistapaciente.component.html',
  styleUrl: './vistapaciente.component.css'
})
export class VistapacienteComponent implements OnInit {
  paciente?: Paciente;
  loading: boolean = true;

  constructor(private Apipacientes: ApiPacientesService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log("HHOLA ESOTY ACAAAAAA")
    this.route.params.subscribe({
      next: params => {
        this.Apipacientes.getPaciente(params['pacienteDni']).subscribe({
          next: data => {
            this.paciente = data;
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
}
/* ngOnInit(): void {
   const dni = "12131312";
 this.Apipacientes.getPaciente(dni).subscribe((paciente)=>{
   this.paciente = paciente;
   console.log(paciente);
 })
} */ //ESTO ES HARDCODEA SIRVIO DE PRUEBAS


/* Paciente:Paciente={
  nombre: 'Zir',
  apellido: 'Dani',
  dni: '24336644',
  genero: 'Femenino',
  fechaCons: '12-11-2023',
  telefono: '13145678',
  consulta: 'Dolor de Estomago',
  Diagnostico:"Con esto, el diagnóstico del paciente se mostrará dentro del componente app-vistadiagnostico, tanto en su archivo TypeScript como en su archivo HTML. Asegúrate de que el componente app-vistadiagnostico esté siendo utilizado correctamente y que el diagnóstico del paciente esté disponible en el lugar donde utilizas este componente."
} */ //ESTO ES HARDCODEA SIRVIO DE PRUEBAS
