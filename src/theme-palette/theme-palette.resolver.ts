import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth.ecorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ThemePaletteInput } from './dto/theme-palette.dto';
import { ThemePalette } from './theme-palette.modal';
import { ThemePaletteService } from './theme-palette.service';

@Resolver()
export class ThemePaletteResolver {
    constructor(private themePaletteService: ThemePaletteService) { }


    @Query(() => ThemePalette, { name: 'getTheme' })
    // @UseGuards(JwtAuthGuard)
    async getTheme(@AuthUser() user: any) {
        return this.themePaletteService.get(user.userId);
    }

    @Mutation(() => ThemePalette, { name: 'updateTheme' })
    @UseGuards(JwtAuthGuard)
    async updateTheme(@Args('body') body: ThemePaletteInput, @AuthUser() user:any) {
        return this.themePaletteService.update(body, user.userId);
    }
}
