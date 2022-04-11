import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ThemePaletteInput } from './dto/theme-palette.dto';
import { ThemePalette } from './schema';

@Injectable()
export class ThemePaletteService {
    constructor(
        @InjectModel(ThemePalette.name) private themePaletteModel: Model<ThemePalette>,

    ) { }

    async get(userId: string) {
        const theme = await this.themePaletteModel.findOne({ userId }).exec();
        if (theme) {
            return theme;
        }
        return this.themePaletteModel.findOne({ type: "default" }).exec();
    }

    async update(input: ThemePaletteInput, userId: string) {
        return this.themePaletteModel.findOneAndUpdate({ userId }, input, { upsert: true, new: true }).exec();
    }
}
