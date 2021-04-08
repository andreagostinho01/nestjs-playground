import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Tarefa 1', completed: true },
    { id: 2, description: 'Tarefa 2', completed: true },
    { id: 3, description: 'Tarefa 3', completed: false },
    { id: 4, description: 'Tarefa 4', completed: true },
    { id: 5, description: 'Tarefa 5', completed: false },
  ];

  getAll(): Task[] {
    return this.tasks;
  }

  getById(id: number) {
    return this.tasks.find((item) => item.id === id);
  }
}
