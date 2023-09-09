import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './users/service/user.service';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/serviceone')
  ],
  controllers: [
    AppController,
    UserService
  ],
  providers: [AppService],
})
export class AppModule {}
