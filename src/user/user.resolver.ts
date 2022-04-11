import { Resolver, Args, Query, Mutation, ResolveField, Parent } from '@nestjs/graphql';

import { User } from './user.modal';
import { UserService } from './user.service';
import { UserInfoInput } from './dto/login.dto';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  
  @Query((returns) => User, { name: 'getUserById' })
  async getUserById(@Args('id') input: string) {
    return {};
  }

  @Mutation((returns) => User, { name: 'createUser' })
  async createUser(@Args('body') body: UserInfoInput) {
    console.log(body);
    return this.userService.create(body);
  }

}
