import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from './config/sequelize.config.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true,}),

    SequelizeModule.forRootAsync
    ({
      imports:[ConfigModule],
      useClass:SequelizeConfigService

     }),
    SequelizeModule.forFeature([User]),
     AuthModule,
],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
