import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
})
export class TaskModule {
  id?: string;
  title?: string;
  description?: string;
  userId?: string;
  status?: number;
  data?: Date;
  constructor(
    @Inject('id') id?: string,
    @Inject('title') title?: string,
    @Inject('description') description?: string,
    @Inject('userId') userId?: string,
    @Inject('status') status?: number,
    @Inject('data') data?: Date,
  ) {
    this.id = id ? id : '';
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.status = status;
    this.data = data ? data : undefined;
  }
  getId(): string {
    return this.id ? this.id : '';
  }
  getTitle(): string {
    return this.title ? this.title : '';
  }
  getDescription(): string {
    return this.description ? this.description : '';
  }
  getUserId(): string {
    return this.userId ? this.userId : '';
  }
  getStatus(): number {
    return this.status ? this.status : 0;
  }
  getData(): Date {
    return this.data ? this.data : new Date();
  }
  setId(id: string): void {
    this.id = id;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  setDescription(description: string): void {
    this.description = description;
  }
  setUserId(userId: string): void {
    this.userId = userId;
  }
  setStatus(status: number): void {
    this.status = status;
  }
  setData(data: Date): void {
    this.data = data;
  }
  
}

