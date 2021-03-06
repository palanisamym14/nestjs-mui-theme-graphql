import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({ timestamps: true })
export class User {
  @Prop()
  userName?: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
