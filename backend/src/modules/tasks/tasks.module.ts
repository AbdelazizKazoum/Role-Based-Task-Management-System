/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { TaskDocument, TaskSchema } from './entities/task.schema';
import { LoggerModule } from 'src/common/logger/logger.module';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: TaskDocument.name, schema: TaskSchema },
    ]),
    LoggerModule,
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
