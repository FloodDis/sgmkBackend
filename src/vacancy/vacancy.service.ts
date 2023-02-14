import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitysService } from 'src/citys/citys.service';
import { Repository } from 'typeorm';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancy.entity';

@Injectable()
export class VacancyService {

    constructor(@InjectRepository(Vacancy) private vacancyRepository: Repository<Vacancy>,
        private cityService: CitysService) { }

    async getAllVacancies() {
        const vacancies = await this.vacancyRepository.find();
        return vacancies;
    }

    async createVacancy(vacancyDto: CreateVacancyDto) {
        const city = await this.cityService.getCityById(vacancyDto.city_id);
        const vacancy = this.vacancyRepository.create({
            vacancy_name: vacancyDto.vacancy_name,
            salary: vacancyDto.salary,
            description: vacancyDto.description,
            city: city,
            users: [],
            prof_fields: []
        });
        await this.vacancyRepository.save(vacancy);
        return vacancy;
    }
}
