import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { log } from 'console';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  user: User = {} as User;
  
  constructor() {
    this.user = {} as User;
  }

  ngOnInit() {
    console.log("registerrr")
    this.user = {
      id: 1,
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      fechaNacimiento: '',
      dni: '',
      genero: '',
      usuario: '',
      cobertura: '',
    };
  }

  onSubmit() {
    console.log('Formulario enviado:', this.user);
    console.log('Se guardan los datos');
    
  }
}
