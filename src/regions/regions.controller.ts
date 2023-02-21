import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { RegionsService } from './regions.service';

@Controller('region')
export class RegionsController {

    constructor(private regionService: RegionsService) { }

    @Get()
    async getAllRegions() {
        return await this.regionService.getAllRegions();
    }

    @Post()
    async createRegion(@Body() regionDto: CreateRegionDto) {
        await this.regionService.createRegion(regionDto);
    }

    @Delete('/:id')
    async deleteRegion(@Param('id') id: number) {
        await this.regionService.deleteRegion(id);
    }

    @Post('/:id')
    async updateRegion(@Param('id') id: number, @Body() dto: CreateRegionDto) {
        await this.regionService.updateRegion(id, dto);
    }
}
