import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://thiennt2004_db_user:9Dj7ACvMxqAKeg8L@cluster0.lbolann.mongodb.net',
    ),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
