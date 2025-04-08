/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { DatabaseModule } from 'src/common/database/database.module';
import { ProjectDocument, ProjectSchema } from './entities/project.schema';
import { LoggerModule } from 'src/common/logger/logger.module';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: ProjectDocument.name,
        schema: ProjectSchema,
      },
    ]),
    LoggerModule,
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
