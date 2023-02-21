import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { VacancyService } from './vacancy.service';

@Controller('vacancy')
export class VacancyController {

    constructor(private vacancyService: VacancyService) { }

    @Get()
    async getAllVacancies() {
        return await this.vacancyService.getAllVacancies();
    }

    @Post()
    async createVacancy(@Body() vacancyDto: CreateVacancyDto) {
        await this.vacancyService.createVacancy(vacancyDto);
    }

    @Delete('/:id')
    async deleteVacancy(@Param('id') id: number) {
        await this.vacancyService.deleteVacancy(id);
    }

    @Post('/:id')
    async updateVacancy(@Param('id') id: number, @Body() dto: CreateVacancyDto) {
        await this.vacancyService.updateVacancy(id, dto);
    }
}
