import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'nestjs',
      useFindAndModify: false,
      useNewUrlParser: true,
    }),
    TasksModule,
  ],
})
export class AppModule {}
