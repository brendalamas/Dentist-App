import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, NavbarComponent, DialogContentComponent]
})
export class AppComponent {
  title = 'dentistapp';

 
}
