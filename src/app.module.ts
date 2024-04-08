import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pawnhubModule } from "./pawn-hub/pawn-hubModule"

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    entities: [__dirname, '/**/*.entity(.ts,.js)'],
    synchronize: true

  }),
  pawnhubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
