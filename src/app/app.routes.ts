import { Routes } from '@angular/router';
import { VistapacienteComponent } from './components/vistapaciente/vistapaciente.component';
import { MockDeskpacientesComponent } from './components/mock-deskpacientes/mock-deskpacientes.component';

export const routes: Routes = [
    {path:'pacientes', component: MockDeskpacientesComponent},
    {path:'pacientes/:pacienteDni', component: VistapacienteComponent},
    //rutas  de los pacientes
];
