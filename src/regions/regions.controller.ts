import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
