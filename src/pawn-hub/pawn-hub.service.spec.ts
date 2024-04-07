import { Test, TestingModule } from '@nestjs/testing';
import { PawnHubService } from './pawn-hub.service';

describe('PawnHubService', () => {
  let service: PawnHubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PawnHubService],
    }).compile();

    service = module.get<PawnHubService>(PawnHubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
