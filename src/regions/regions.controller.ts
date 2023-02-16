import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {

    constructor(private regionService: RegionsService) { }

    @Get()
    getAllRegions() {
        return this.regionService.getAllRegions();
    }

    @Post()
    createRegion(@Body() regionDto: CreateRegionDto) {
        this.regionService.createRegion(regionDto);
    }

    @Delete('/:id')
    deleteRegion(@Param('id') id: number) {
        this.regionService.deleteRegion(id);
    }

    @Post('/:id')
    updateRegion(@Param('id') id: number, @Body() dto: CreateRegionDto) {
        this.regionService.updateRegion(id, dto);
    }
}
