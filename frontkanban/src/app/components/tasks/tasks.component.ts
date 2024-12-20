import { Component, Input } from '@angular/core';
import {AccordionPanel, Accordion, AccordionHeader, AccordionContent } from 'primeng/accordion';
import { TaskModule } from '../../modules/task/task.module';


@Component({
  selector: 'app-tasks',
  imports: [AccordionPanel, Accordion, AccordionHeader, AccordionContent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() tasks: TaskModule[] = [];
  
  style = {
    'background-color': '#fff',
    'color': '#000',
    'text-align': 'center',
    'font-family': 'sans-serif',
  }
}
