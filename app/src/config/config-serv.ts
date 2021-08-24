import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('MYSQL_SERVER'),
            database: this.configService.get<string>('MYSQL_DB'),
            username: this.configService.get<string>('MYSQL_USER'),
            password: this.configService.get<string>('MYSQL_PASS'),
            port: parseInt(this.configService.get<string>('MYSQL_PORT')),
            entities: [__dirname + './**/**/*entity{.ts,.js}'],
            autoLoadEntities: true,
            synchronize: false
    };
  }
}