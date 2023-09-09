import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { UserService } from 'src/users/service/user.service';
import { Users, UsersSchema } from './entity/users';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Users.name, schema:UsersSchema}]),
    ,],
  controllers: [],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}