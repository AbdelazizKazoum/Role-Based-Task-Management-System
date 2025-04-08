/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { AbstractDocument } from 'src/common/database/abstract.schema';

@Schema()
export class ActivityLogDocument extends AbstractDocument {
  @Prop({ required: true })
  action: string; // e.g., 'created_task', 'assigned_task'

  @Prop({ required: true })
  keycloakId: string;

  @Prop({ required: true })
  entityType: string; // e.g., 'task', 'project'

  @Prop({ type: Types.ObjectId })
  entityId: Types.ObjectId;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const ActivityLogSchema =
  SchemaFactory.createForClass(ActivityLogDocument);
