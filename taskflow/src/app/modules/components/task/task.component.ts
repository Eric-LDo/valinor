import { Component,  inject, Input } from '@angular/core';
import { Task } from '../../interface/task.interface';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogAddTaskComponent } from '../dialog/dialog-add-task/dialog-add-task.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../../service/task.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() taskUpdated = new EventEmitter<void>();

  #dialog = inject(MatDialog);
  public service = new TaskService
  constructor(){
     
  }

  
  
  getPriorityText(priorityLevel: number): string {
    switch (priorityLevel) {
      case 1:
        return 'Baixíssima';
      case 2:
        return 'Baixa';
      case 3:
        return 'Média';
      case 4:
        return 'Alta';
      case 5:
        return 'Altíssima';
      default:
        return 'Desconhecida';
    }
  }

  getPriorityClass(priorityLevel: number): string {
    switch (priorityLevel) {
      case 1:
        return 'priority-lowest';
      case 2:
        return 'priority-low';
      case 3:
        return 'priority-medium';
      case 4:
        return 'priority-high';
      case 5:
        return 'priority-highest';
      default:
        return 'priority-unknown';
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'to-do':
        return 'status-todo';
      case 'in progress':
        return 'status-in-progress';
      case 'done':
        return 'status-done';
      default:
        return 'status-unknown';
    }
  }

  dates(): string {
    if (this.task.endDate) {
      return `${this.formatDate(this.task.initDate)} | ${this.formatDate(this.task.endDate)}`;
    } else {
      return this.formatDate(this.task.initDate);
    }
  }

  private formatDate(date: string | Date | null | undefined): string {
    if (!date) return 'Sem data';
  
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return 'Data inválida';
    }
  
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month}`;
  }

  formatDateForInput(date: string | Date | null | undefined): string {
    if (!date) return '';
  
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return '';
    }
  
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  public changeStatus(task:Task){
    if(task.status === 'To-do'){
      task.status = 'In Progress'; 
    }else if(task.status === 'In Progress'){
      task.status = 'Done'
    }else if(task.status === 'Done'){
      task.status = 'To-do'
    }else{
      alert('ta estranho')
    }
    this.service.updateTask(task).then(()=>this.taskUpdated.emit())
    
  }

  editTask(task: Task): void {
      this.#dialog.open(DialogAddTaskComponent, { data: { taskEdit: task } })
  }

  deleteTask(task: Task): void {
    console.log('Excluindo tarefa:', task);
    this.service.delete(task._id).then(() => {
      this.taskUpdated.emit();
    });
  }

}
