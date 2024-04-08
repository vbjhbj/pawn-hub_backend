import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PawnHubService } from './pawn-hub.service';
import { PawnHubController } from './pawn-hub.controller';

@Module({
  providers: [PawnHubService],
  controllers: [PawnHubController]
})
export class PawnHubModule {}
