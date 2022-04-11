import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class ThemePalette {
  @Field((type) => ID, { nullable: true })
  id: string;

  @Field({nullable: true})
  primary: string;
  
  @Field({ nullable: true })
  secondary: string;
}
