import { Controller, Get, Post, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CitysService } from './citys.service';
import { CreateCityDto } from './dto/create-city.dto';

@Controller('city')
@UseGuards(JwtAuthGuard)
export class CitysController {

    constructor(private citysService: CitysService) { }

    @Post()
    async createCity(@Body() cityDto: CreateCityDto) {
        return await this.citysService.createCity(cityDto);
    }

    @Get()
    async getAllCitys() {
        return await this.citysService.getAllCitys();
    }

    @Delete('/:id')
    async deleteCity(@Param('id') id: number) {
        await this.citysService.deleteCity(id);
    }

    @Post('/:id')
    async updateCity(@Param('id') id: number, @Body() dto: CreateCityDto) {
        await this.citysService.updateCity(id, dto);
    }

}
