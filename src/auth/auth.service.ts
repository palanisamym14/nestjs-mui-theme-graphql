import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareHash } from 'src/common/util';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private readonly jwtService: JwtService) { }

    async validateUserCredentials(body): Promise<any> {
        const { email, password } = body;
        const user = await this.usersService.findByEmail(email);
        const match = compareHash(password, user.password);
        if (!match) {
            throw new BadRequestException('password mismatch');
        }
        return user;
    }

    async loginWithCredentials(user: any) {
        const payload = { userName: user.userName, email: user.email, userId: user.id };
        return this.jwtService.sign(payload);
    }
}
