import { Test, TestingModule } from '@nestjs/testing';
import { PawnHubController } from './pawn-hub.controller';

describe('PawnHubController', () => {
  let controller: PawnHubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PawnHubController],
    }).compile();

    controller = module.get<PawnHubController>(PawnHubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
