import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectId, LeanDocument } from 'mongoose';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<LeanDocument<Task>[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: ObjectId): Promise<LeanDocument<Task>> {
    return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() task: Task): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: ObjectId) {
    const deleteTask = await this.taskService.delete(id);

    if (deleteTask.deletedCount > 0)
      return { message: 'Excluído com sucesso!' };

    return { message: 'Tarefa não encontrada!' };
  }
}
