import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentsModule } from './Components/components.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: (process.env.NODE_ENV === 'development' && true) || false,
      debug: (process.env.NODE_ENV === 'development' && true) || false,
      autoSchemaFile: true,
    }),
    ComponentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
