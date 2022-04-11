import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({ timestamps: true })
export class ThemePalette {
  @Prop()
  userId: string;
  
  @Prop()
  primary: string;
  
  @Prop()
  secondary: string;
}

export const ThemePaletteSchema = SchemaFactory.createForClass(ThemePalette);
export type ThemePaletteDocument = ThemePalette & Document;
