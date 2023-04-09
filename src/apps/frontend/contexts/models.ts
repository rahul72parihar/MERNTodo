import { Document } from 'mongoose';

interface ITask extends Document {
  name: string;
  description?: string;
  completed: boolean;
  dueDate: Date;
}

interface IProject extends Document {
  name: string;
  description?: string;
  tasks?: ITask[];
}

export { ITask, IProject };
