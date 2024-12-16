import { Component } from '@angular/core';
import { LogofildComponent } from "../logofild/logofild.component";
import { BtnloginComponent } from "../btnlogin/btnlogin.component";


@Component({
  selector: 'app-header',
  imports: [LogofildComponent, BtnloginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
}
