import { Component } from '@angular/core';
import { Paciente } from '../../interfaces/paciente';

@Component({
  selector: 'app-vistapaciente',
  standalone: true,
  imports: [],
  templateUrl: './vistapaciente.component.html',
  styleUrl: './vistapaciente.component.css'
})
export class VistapacienteComponent {
 
  Paciente:Paciente={
    nombre: 'Zir',
    apellido: 'Dani',
    dni: '24336644',
    genero: 'Femenino',
    fechaCons: '12-11-2023',
    telefono: '13145678',
    consulta: 'Dolor de Estomago',
    Diagnostico:"Con esto, el diagnóstico del paciente se mostrará dentro del componente app-vistadiagnostico, tanto en su archivo TypeScript como en su archivo HTML. Asegúrate de que el componente app-vistadiagnostico esté siendo utilizado correctamente y que el diagnóstico del paciente esté disponible en el lugar donde utilizas este componente."
  }
}
