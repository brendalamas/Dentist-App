import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./components/register/register.component";
import { VistapacienteComponent } from './components/vistapaciente/vistapaciente.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegisterComponent,VistapacienteComponent]
})
export class AppComponent {
  title = 'dentistapp';
}
