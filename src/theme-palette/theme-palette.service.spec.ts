import { Test, TestingModule } from '@nestjs/testing';
import { ThemePaletteService } from './theme-palette.service';

describe('ThemePaletteService', () => {
  let service: ThemePaletteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemePaletteService],
    }).compile();

    service = module.get<ThemePaletteService>(ThemePaletteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
