/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { ActivityLogDocument } from './entities/activity-log.schema';

@Injectable()
export class ActivityLogRepository extends AbstractRepository<ActivityLogDocument> {
  protected readonly logger = new Logger(ActivityLogDocument.name);

  constructor(
    @InjectModel(ActivityLogDocument.name)
    activityModule: Model<ActivityLogDocument>,
  ) {
    super(activityModule);
  }
}
