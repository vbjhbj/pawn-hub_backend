import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PawnHubModule } from "PawnHub/PawnhubModule"
import { PawnHubModule } from './pawn-hub/pawn-hub.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    entities: [__dirname, '/**/*.entity(.ts,.js)'],
    synchronize: true

  }),
  PawnHubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
