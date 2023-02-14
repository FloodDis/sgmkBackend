import { Controller, Get } from '@nestjs/common';
import { VacancyService } from './vacancy.service';

@Controller('vacancy')
export class VacancyController {

    constructor(private vacancyService: VacancyService) { }

    @Get()
    getAllVacancies() {
        this.vacancyService.getAllVacancies();
    }
}
