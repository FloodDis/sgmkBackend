import { Controller, Get, Post, Body } from '@nestjs/common';
import { CitysService } from './citys.service';
import { CreateCityDto } from './dto/create-city.dto';

@Controller('citys')
export class CitysController {

    constructor(private citysService: CitysService) { }

    @Post()
    createCity(@Body() cityDto: CreateCityDto) {
        return this.citysService.createCity(cityDto);
    }

    @Get()
    getAllCitys() {
        return this.citysService.getAllCitys();
    }
}
