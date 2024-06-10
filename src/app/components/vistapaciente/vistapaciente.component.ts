import { Component, OnInit } from '@angular/core';
import { ApiPacientesService } from '../../Api_pacientes/api-pacientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-vistapaciente',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './vistapaciente.component.html',
  styleUrl: './vistapaciente.component.css'
})
export class VistapacienteComponent implements OnInit{
  paciente: any;
  Pacientes:any[] = [];
  nuevoDiagnostico: string = ' '; // Variable para almacenar el nuevo diagnóstico


  constructor(private Apipacientes:ApiPacientesService ){
    this.nuevoDiagnostico = ' ';
  }

  ngOnInit(): void {
    const dni = "12131312";
    this.Apipacientes.getPaciente(dni).subscribe((paciente)=>{
      this.paciente = paciente;
      console.log(paciente);
    })
  }
  
  actualizarDiagnostico(): void {
    const dni = "12131312"; // Pongo el DNI de hardcodeado tengo que recibirlo mediate un evento click
    const nuevoDiagnostico = this.nuevoDiagnostico; // asignacion del diagnostico que edito
    this.Apipacientes.updateDiagnosticoPaciente(dni, nuevoDiagnostico).subscribe(() => {
        
        this.paciente.Diagnostico = nuevoDiagnostico; // se ejecuta el patch y se asigna al variable de la bdd
    });
}

  /* Paciente:Paciente={
    nombre: 'Zir',
    apellido: 'Dani',
    dni: '24336644',
    genero: 'Femenino',
    fechaCons: '12-11-2023',
    telefono: '13145678',
    consulta: 'Dolor de Estomago',
    Diagnostico:"Con esto, el diagnóstico del paciente se mostrará dentro del componente app-vistadiagnostico, tanto en su archivo TypeScript como en su archivo HTML. Asegúrate de que el componente app-vistadiagnostico esté siendo utilizado correctamente y que el diagnóstico del paciente esté disponible en el lugar donde utilizas este componente."
  } */
}
