import { Component } from '@angular/core';

import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  standalone: true,
  providers: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'frontkanban';
}
