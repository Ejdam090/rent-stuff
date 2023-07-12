import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs//typeorm';
import { Module } from '@nestjs/common';
import config from '../../ormconfig'
@Module({
  imports: [TypeOrmModule.forRoot(config)],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) console.log(' DB Connected Successfully');
  }
}
