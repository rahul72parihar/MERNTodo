import mongoose, { CallbackError, Connection } from 'mongoose';

import ConfigService from '../../../config/config-service';

// import { TaskDB, taskDbSchema } from './task-db';
import { projectSchema, IProject } from './task-db';

export default class ProjectRepository {
  public static Project: mongoose.Model<IProject>;

  static async createDBConnection(): Promise<Connection> {
    return new Promise((resolve, reject) => {
      const mongoURI = ConfigService.getStringValue('mongoDb.uri');
      mongoose.createConnection(
        mongoURI,
        {},
        (error: CallbackError, result: Connection): void => {
          if (error) {
            reject(error);
          } else {
            ProjectRepository.Project = result.model(
              'Project',
              projectSchema,
            ) as unknown as mongoose.Model<IProject>;
            resolve(result);
          }
        },
      );
    });
  }
}
