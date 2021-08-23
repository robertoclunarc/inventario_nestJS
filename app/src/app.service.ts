import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  configServ(){
    
    return {
      host: process.env.MYSQL_SERVER,
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PW,
      port: parseInt(process.env.MYSQL_PORT),
      connectionLimit: 10
    }    
  }

  getHello(): string {
    
    const message = `Las APIs se ejecutan en el puerto: ${process.env.APP_PORT}. La base de datos es: ${process.env.MYSQL_DB}, corriendo en el servidor ${process.env.MYSQL_SERVER}, con el usuario ${process.env.MYSQL_USER}`;
    return message;
  }
  
}