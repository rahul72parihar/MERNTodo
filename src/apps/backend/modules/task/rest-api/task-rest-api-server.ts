import bodyParser from 'body-parser';
import express, { Application } from 'express';

import ErrorHandler from '../../error/error-handler';
import TaskRepository from '../internal/store/task-repository';
const taskRouter = require('./router');
export default class TaskRESTApiServer {
  public static async create(): Promise<Application> {
    await TaskRepository.createDBConnection();

    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(taskRouter);
    app.use(ErrorHandler.AppErrorHandler);

    return Promise.resolve(app);
  }
}
