import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BtnComponent } from '../../components/btn/btn.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent,BtnComponent],
  standalone: true,
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
