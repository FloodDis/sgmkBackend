import { Controller, Get, Post } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { VacancyService } from './vacancy.service';

@Controller('vacancy')
export class VacancyController {

    constructor(private vacancyService: VacancyService) { }

    @Get()
    getAllVacancies() {
        this.vacancyService.getAllVacancies();
    }

    @Post()
    createVacancy(vacancyDto: CreateVacancyDto) {
        this.vacancyService.createVacancy(vacancyDto);
    }
}
