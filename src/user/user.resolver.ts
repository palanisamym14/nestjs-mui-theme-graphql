import { Resolver, Args, Query, Mutation, ResolveField, Parent } from '@nestjs/graphql';

import { User } from './user.modal';
import { UserService } from './user.service';
import { UserInfoInput } from './dto/login.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthUser } from 'src/auth/auth.decorator';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  
  @Query((returns) => User, { name: 'getUser' })
  @UseGuards(JwtAuthGuard)
  async getUser(@AuthUser() user: any) {
    return this.userService.get(user.userId);
  }

  @Mutation((returns) => User, { name: 'createUser' })
  async createUser(@Args('body') body: UserInfoInput) {
    return this.userService.create(body);
  }
}
