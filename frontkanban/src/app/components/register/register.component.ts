import { Component } from '@angular/core';
import { BgComponent } from "../bg/bg.component";
import { CardComponent } from "../card/card.component";
import { InputNameComponent } from "../input-name/input-name.component";
import { InputEmailComponent } from "../input-email/input-email.component";
import { InputPasswordComponent } from "../input-password/input-password.component";
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-register',
  imports: [BgComponent, CardComponent, InputNameComponent, InputEmailComponent, InputPasswordComponent, BtnComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
submitForm: Event | undefined;

registerSubmit(e: Event) {
  e.preventDefault(); 

  const formData = new FormData(e.target as HTMLFormElement);

  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmar = formData.get('confirmar');

  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Senha:', password);
  console.log('Confirmar Senha:', confirmar);

  
}
  static toggleShowThis() {
    throw new Error('Method not implemented.');
  }
  showthis:boolean=false
  toggleShowThis(){
    this.showthis=!this.showthis
  }
}
