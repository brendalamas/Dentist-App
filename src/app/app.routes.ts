import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { AgendaComponent } from './components/agenda/agenda.component';
import { VistapacienteComponent } from './components/vistapaciente/vistapaciente.component';
import { MockDeskpacientesComponent } from './components/mock-deskpacientes/mock-deskpacientes.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'home', component:MockDeskpacientesComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'calendar', component:AgendaComponent},
    {path:'pacientes/:dni', component: VistapacienteComponent},
    {path:'**', redirectTo:''},
];
