import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { AgendaComponent } from './components/agenda/agenda.component';
import { MockDeskpacientesComponent } from './components/mock-deskpacientes/mock-deskpacientes.component';
import { VistapacienteComponent } from './components/vistapaciente/vistapaciente.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'agenda', component:AgendaComponent},
    {path:'pacientes', component: MockDeskpacientesComponent},
    {path:'pacientes/:pacienteDni', component: VistapacienteComponent},
    {path:'**', redirectTo:''},
];
