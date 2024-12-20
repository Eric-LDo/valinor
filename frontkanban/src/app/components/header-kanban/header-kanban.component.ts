import { Component } from '@angular/core';
import { LogofildComponent } from "../logofild/logofild.component";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';


@Component({
  selector: 'app-header-kanban',
  imports: [LogofildComponent, FontAwesomeModule, AddTasksComponent],
  templateUrl: './header-kanban.component.html',
  styleUrl: './header-kanban.component.css'
})
export class HeaderKanbanComponent {
  faPlus = faPlus;
}
