import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DESA_MYSQL_SERVER'),
            database: this.configService.get<string>('DESA_MYSQL_DB'),
            username: this.configService.get<string>('DESA_MYSQL_USER'),
            password: this.configService.get<string>('DESA_MYSQL_PASS'),
            port: parseInt(this.configService.get<string>('DESA_MYSQL_PORT')),
            entities: [__dirname + './**/**/*entity{.ts,.js}'],
            autoLoadEntities: true,
            synchronize: false
    };
  }
}