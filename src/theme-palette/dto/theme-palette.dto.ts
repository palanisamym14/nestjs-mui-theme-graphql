import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class ThemePaletteInput {

  @Field()
  @IsString()
  @IsOptional()
  primary: string;

  @Field()
  @IsString()
  @IsOptional()
  secondary: string;
}
