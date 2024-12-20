import { Component } from '@angular/core';
import { BgComponent } from "../bg/bg.component";
import { CardComponent } from "../card/card.component";
import { InputTitleComponent } from "../input-title/input-title.component";
import { InputTextareaComponent } from "../input-textarea/input-textarea.component";
import { BtnComponent } from "../btn/btn.component";
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'app-add-tasks',
  imports: [BgComponent, CardComponent, InputTitleComponent, InputTextareaComponent, BtnComponent,RadioButton],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTasksComponent {
  showthis: boolean = true
  toggleShowthis(){
    this.showthis = !this.showthis
    console.log(this.showthis)
  }
}
