import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEmail, IsMobilePhone } from 'class-validator';

@InputType()
export class UserInfoInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password: string;
}
