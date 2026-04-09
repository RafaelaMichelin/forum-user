import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
import { User } from "../user/user";

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory
{
 constructor(private configService: ConfigService)
 {}

    createSequelizeOptions(connectionName?: string): Promise<SequelizeModuleOptions> | SequelizeModuleOptions {
        return {
            dialect: "mysql",
            host: this.configService.get<string>('DB_HOST'),
            port: Number (this.configService.get<number>('DB_PORT')),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD') || '',
            database: this.configService.get<string>('DB_DATABASENAME'),
            synchronize: true,
            autoLoadModels: true,
            models: [User]
            
        };
    }
}