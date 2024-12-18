import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() name?: string;
  @Input() type?:string
  @Input() placeholder?:string
  @Input() label?:string
  @Input() required?:boolean
  
}
