import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserInfoInput } from 'src/user/dto/login.dto';
import { User } from 'src/user/schema';
import { AuthToken } from './auth.modal';
import { AuthService } from './auth.service';

@Resolver((of) => AuthToken)
export class AuthResolver {
    constructor(private authService: AuthService) { }

    @Mutation((reurns) => AuthToken, { name: 'login' })
    async login(@Args('body') body: UserInfoInput) {
        return this.authService.validateUserCredentials(body);
    }

    @ResolveField()
    token(@Parent() user: User) {
        return this.authService.loginWithCredentials(user);
    }
}
