import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { VacancyService } from './vacancy.service';

@Controller('vacancy')
export class VacancyController {

    constructor(private vacancyService: VacancyService) { }

    @Get()
    getAllVacancies() {
        return this.vacancyService.getAllVacancies();
    }

    @Post()
    createVacancy(@Body() vacancyDto: CreateVacancyDto) {
        this.vacancyService.createVacancy(vacancyDto);
    }

    @Delete('/:id')
    deleteVacancy(@Param('id') id: number) {
        this.vacancyService.deleteVacancy(id);
    }

    @Post('/:id')
    updateVacancy(@Param('id') id: number, @Body() dto: CreateVacancyDto) {
        this.vacancyService.updateVacancy(id, dto);
    }
}
