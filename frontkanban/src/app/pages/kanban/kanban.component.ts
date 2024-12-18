import { Component } from '@angular/core';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-kanban',
  imports: [BtnComponent],
  standalone: true,
  providers: [],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})
export class KanbanComponent {

}
