import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class User{
  @Field((type) => ID)
  _id: string;

  @Field()
  userName?: string;

  @Field()
  email: string;

}
