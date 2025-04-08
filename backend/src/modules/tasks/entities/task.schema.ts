/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { AbstractDocument } from 'src/common/database/abstract.schema';

@Schema()
export class Comment {
  @Prop({ required: true })
  keycloakId: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

const CommentSchema = SchemaFactory.createForClass(Comment);

@Schema()
export class TaskDocument extends AbstractDocument {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: 'open' })
  status: string; // e.g., 'open', 'in_progress', 'done'

  @Prop({ default: 'medium' })
  priority: string; // e.g., 'low', 'medium', 'high'

  @Prop({ type: Types.ObjectId, ref: 'Project' })
  projectId: Types.ObjectId;

  @Prop()
  assignedToKeycloakId: string;

  @Prop()
  assignedByKeycloakId: string;

  @Prop()
  dueDate: Date;

  @Prop({ type: [CommentSchema], default: [] })
  comments: Comment[];
}

export const TaskSchema = SchemaFactory.createForClass(TaskDocument);
