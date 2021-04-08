import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  description: String,
  completed: Boolean,
});
