import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from './config/sequelize.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true,}),

    SequelizeModule.forRootAsync
    ({
      imports:[ConfigModule],
      useClass:SequelizeConfigService

     }),
     AuthModule,
     UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
