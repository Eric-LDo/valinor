import { Component } from '@angular/core';
import { BgComponent } from '../bg/bg.component';
import { CardComponent } from '../card/card.component';
import { InputEmailComponent } from '../input-email/input-email.component';
import { InputPasswordComponent } from "../input-password/input-password.component";
import { BtnComponent } from '../btn/btn.component';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-login',
  imports: [BgComponent, CardComponent, InputEmailComponent, InputPasswordComponent, BtnComponent, RegisterComponent],
  standalone: true,
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submitLogin(e:Event){
    e.preventDefault();
    console.log("Login form submitted");
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Email:', email);
    console.log('Senha:', password);
  }

  showthis:boolean=false
  toggleShowThis(){
    this.showthis=!this.showthis
  }
}
