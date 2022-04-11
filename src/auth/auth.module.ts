import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '300s' }
    })],
  providers: [AuthService, JwtStrategy, AuthResolver, LocalStrategy],
  exports: [AuthService, JwtStrategy]
})
export class AuthModule {}
