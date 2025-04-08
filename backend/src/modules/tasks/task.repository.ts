/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDocument } from './entities/task.schema';
import { AbstractRepository } from 'src/common/database/abstract.repository';

@Injectable()
export class TaskRepository extends AbstractRepository<TaskDocument> {
  protected readonly logger = new Logger(TaskDocument.name);

  constructor(
    @InjectModel(TaskDocument.name)
    taskModel: Model<TaskDocument>,
  ) {
    super(taskModel);
  }
}
