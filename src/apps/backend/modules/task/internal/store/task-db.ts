import mongoose, { Document, Schema } from 'mongoose';

interface ITask extends Document {
  name: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
}

interface IProject extends Document {
  name: string;
  description?: string;
  tasks: ITask[];
}

const taskSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  dueDate: { type: Date },
});

const projectSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  tasks: [taskSchema],
});

const Project = mongoose.model<IProject>('Project', projectSchema);

export { Project, projectSchema, ITask, IProject };
