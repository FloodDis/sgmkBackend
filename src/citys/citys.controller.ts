import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CitysService } from './citys.service';
import { CreateCityDto } from './dto/create-city.dto';
import { DeleteCityDto } from './dto/delete-city.dto';

@Controller('city')
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

    @Delete('/:id')
    deleteCity(@Param('id') id: number) {
        this.citysService.deleteCity(id);
    }

    @Post('/:id')
    updateCity(@Param('id') id: number, @Body() dto: CreateCityDto) {
        this.citysService.updateCity(id, dto);
    }

}
