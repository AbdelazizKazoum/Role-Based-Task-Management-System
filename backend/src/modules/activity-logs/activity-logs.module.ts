/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ActivityLogsService } from './activity-logs.service';
import { ActivityLogsController } from './activity-logs.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import {
  ActivityLogDocument,
  ActivityLogSchema,
} from './entities/activity-log.schema';
import { LoggerModule } from 'src/common/logger/logger.module';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: ActivityLogDocument.name,
        schema: ActivityLogSchema,
      },
    ]),
    LoggerModule,
  ],
  controllers: [ActivityLogsController],
  providers: [ActivityLogsService],
})
export class ActivityLogsModule {}
