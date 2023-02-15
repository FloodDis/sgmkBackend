import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
