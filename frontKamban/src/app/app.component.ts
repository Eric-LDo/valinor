import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldlogoComponent } from "./fieldlogo/fieldlogo.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FieldlogoComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontKamban';

}