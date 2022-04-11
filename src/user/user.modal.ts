import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class User{
  @Field((type) => ID)
  id: string;
  @Field()
  userName?: string;

  @Field()
  email: string;

}
