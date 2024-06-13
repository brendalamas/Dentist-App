import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators  } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  mensajeError = false; // variable boolean para verificar si hay error o no


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    // Crea el reactive form con dos campos: email y password
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    const { email, password } = this.loginForm.value; // Obtiene los valores introducidos en el formulario

    // Realiza una solicitud GET al servidor JSON con las credenciales proporcionadas
    this.http.get<any[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
      .subscribe(users => {
        if (users.length > 0) {
          // en el caso de ser correcto
          this.router.navigate(['/home']);
        } 
        else {
          // en el caso de ser incorrecto
          this.mensajeError = true;
        }
      });
  }
}
