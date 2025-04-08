/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { ProjectDocument } from './entities/project.schema';

@Injectable()
export class ProjectRepository extends AbstractRepository<ProjectDocument> {
  protected readonly logger = new Logger(ProjectDocument.name);

  constructor(
    @InjectModel(ProjectDocument.name)
    projectModule: Model<ProjectDocument>,
  ) {
    super(projectModule);
  }
}
