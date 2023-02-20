import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitysService } from 'src/citys/citys.service';
import { CompaniesService } from 'src/companies/companies.service';
import { Repository } from 'typeorm';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { VacancyResponseDto } from './dto/vacancy-responce.dto';
import { Vacancy } from './vacancy.entity';

@Injectable()
export class VacancyService {

    constructor(@InjectRepository(Vacancy) private vacancyRepository: Repository<Vacancy>,
        private cityService: CitysService,
        private companyService: CompaniesService) { }

    async getAllVacancies() {
        const vacancies = await this.vacancyRepository.find();
        return vacancies.map(x => new VacancyResponseDto(x));
    }

    async createVacancy(vacancyDto: CreateVacancyDto) {
        const vacancy = new Vacancy();

        vacancy.vacancy_name = vacancyDto.vacancy_name;
        vacancy.salary = vacancyDto.salary;
        vacancy.description = vacancyDto.description;
        vacancy.city =
            vacancyDto.cityId ? await this.cityService.getCityById(vacancyDto.cityId) : await this.cityService.createCity(vacancyDto.city);
        vacancy.company =
            vacancyDto.companyId ? await this.companyService.findCompanyById(vacancyDto.companyId) : await this.companyService.createCompany(vacancyDto.company);

        await this.vacancyRepository.save(vacancy);

        return vacancy;
    }

    async deleteVacancy(id: number) {
        await this.vacancyRepository.delete({ vacancy_id: id });
    }

    async updateVacancy(id: number, dto: CreateVacancyDto) {
        await this.vacancyRepository.update(id, {
            vacancy_name: dto.vacancy_name,
            salary: dto.salary,
            description: dto.description,
        })
    }
}
