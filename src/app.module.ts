import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TaskService } from './tasks/shared/task.service';

@Module({
  imports: [],
  controllers: [AppController, TasksController],
  providers: [AppService, TaskService],
})
export class AppModule {}
