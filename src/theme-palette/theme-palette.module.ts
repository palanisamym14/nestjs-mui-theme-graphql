import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ThemePalette, ThemePaletteSchema } from './schema';
import { ThemePaletteService } from './theme-palette.service';
import { ThemePaletteResolver } from './theme-palette.resolver';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: ThemePalette.name, schema: ThemePaletteSchema }]),
    ],
    providers: [ThemePaletteService, ThemePaletteResolver],
    exports: [ThemePaletteService],
})
export class ThemePaletteModule { }