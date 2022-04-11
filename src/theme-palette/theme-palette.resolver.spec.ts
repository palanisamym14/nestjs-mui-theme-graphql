import { Test, TestingModule } from '@nestjs/testing';
import { ThemePaletteResolver } from './theme-palette.resolver';

describe('ThemePaletteResolver', () => {
  let resolver: ThemePaletteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemePaletteResolver],
    }).compile();

    resolver = module.get<ThemePaletteResolver>(ThemePaletteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
