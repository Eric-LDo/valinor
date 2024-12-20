import { Component, OnInit } from '@angular/core';
import { HeaderKanbanComponent } from "../../components/header-kanban/header-kanban.component";
import { Card } from 'primeng/card';
import { AuthService} from '../../services/auth.service';
import { UserModule } from '../../modules/user/user.module';
import { TaskModule } from '../../modules/task/task.module';
import {AccordionPanel, Accordion, AccordionHeader, AccordionContent } from 'primeng/accordion';
import { TasksComponent } from '../../components/tasks/tasks.component';





@Component({
  selector: 'app-kanban',
  imports: [HeaderKanbanComponent, Card, TasksComponent],
  standalone: true,
  providers: [],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})



export class KanbanComponent implements OnInit {
  auth?: UserModule
  name?: string
  tasks?: void | TaskModule[]

  constructor(private authService: AuthService) { 
  }
  async ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {      
      this.auth = new UserModule( 
        JSON.parse(storedUser).id,
        JSON.parse(storedUser).name,
        JSON.parse(storedUser).email,
        JSON.parse(storedUser).password
      );
      this.name = this.auth?this.auth.getName(): '';
      this.tasks = await this.auth.getTasksForUser(this.auth.getId());
    } 
  }


  class: string = "w-full h-full mt-6"
  style = {
    'background-color': '#fff',
    'color': '#000',
    'text-align': 'center',
    'font-family': 'sans-serif',
  }
  
}

