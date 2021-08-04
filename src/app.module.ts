import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlmMovInventarioModule } from './alm-mov-inventario/alm-mov-inventario.module';
import { ConfigModule } from '@nestjs/config';
import { DBConfigService } from './config/config-serv';

@Module({
  imports: [
    AlmMovInventarioModule, 
    TypeOrmModule.forRootAsync({
      useClass: DBConfigService, 
      inject: [DBConfigService] 
    }),
    ConfigModule.forRoot({ 
      isGlobal: true, 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}