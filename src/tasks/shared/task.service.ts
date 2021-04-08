import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAll() {
    return this.taskModel.find().lean();
  }

  async getById(id: ObjectId) {
    return this.taskModel.findById(id).lean();
  }

  async create(task: Task) {
    return this.taskModel.create(task);
  }

  async update(id: ObjectId, task: Task) {
    return this.taskModel.findOneAndUpdate({ _id: id }, task, { new: true });
  }

  async delete(id: ObjectId) {
    return this.taskModel.deleteOne({ _id: id });
  }
}
