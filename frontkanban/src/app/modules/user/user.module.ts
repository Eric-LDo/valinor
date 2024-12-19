import { Inject, NgModule } from '@angular/core';
import { TaskModule } from '../task/task.module';




@NgModule({
  declarations: [],
})
export class UserModule {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  
  constructor(
    @Inject('id') id: string,
    @Inject('name') name: string,
    @Inject('email') email: string,
    @Inject('password') password: string
  ) {
      this.id = id;
      this.name = name; 
      this.email = email; 
      this.password = password; 
    }
  getId(): string { 
    return this.id; 
  }
  getName(): string { 
    return this.name; 
  }
  getEmail(): string { 
    return this.email; 
  }
  getPassword(): string { 
    return this.password; 
  }
  setId(id: string): void {
    this.id = id;
  }
  setName(name: string): void { 
    this.name = name; 
  }
  setEmail(email: string): void { 
    this.email = email; 
  }
  setPassword(password: string): void { 
    this.password = password; 
  }
  async getTasksForUser(userId: string) {
    return await fetch(`http://localhost:3333/task/${userId}`)
        .then(response => response.json())
        .then(data => {
          const tasks: TaskModule[] = []
          for(let i = 0; i < data.length ; i++ ){
            tasks.push(data[i])
          };
          return tasks;
        })
        .catch(error => {
            console.error(error);
          }
        )
  }
}
