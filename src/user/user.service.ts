import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './schema';
import { UserInfoInput } from './dto/login.dto';
import { compareHash, passwordHash } from './../common/util';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) { }


  async get(id: string) {
    return this.userModel.findById(id);
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('email address not found');
    }
    return user;
  }

  async create(user: UserInfoInput) {
    const { password, email } = user
    const _password =await passwordHash(password);
    const userName = email.split('@')[0];
    const payload = { userName, password: _password, email };
    return new this.userModel(payload).save();
  }
}
