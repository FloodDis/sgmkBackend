import { Controller, Get, Post, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';

@Controller('city')
@UseGuards(JwtAuthGuard)
export class CitiesController {
  constructor(private citysService: CitiesService) {}

  @Post()
  @UseGuards(RoleGuard)
  async createCity(@Body() cityDto: CreateCityDto) {
    return await this.citysService.createCity(cityDto);
  }

  @Get()
  async getAllCities() {
    return await this.citysService.getAllCities();
  }

  @Delete('/:id')
  @UseGuards(RoleGuard)
  async deleteCity(@Param('id') id: number) {
    await this.citysService.deleteCity(id);
  }

  @Post('/:id')
  @UseGuards(RoleGuard)
  async updateCity(@Param('id') id: number, @Body() dto: CreateCityDto) {
    await this.citysService.updateCity(id, dto);
  }
}
