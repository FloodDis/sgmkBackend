import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitysService } from 'src/citys/citys.service';
import { CompaniesService } from 'src/companies/companies.service';
import { ProfFieldService } from 'src/prof-field/prof-field.service';
import { Repository } from 'typeorm';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { VacancyResponseDto } from './dto/vacancy-responce.dto';
import { Vacancy } from './vacancy.entity';

@Injectable()
export class VacancyService {

    constructor(@InjectRepository(Vacancy) private vacancyRepository: Repository<Vacancy>,
        private cityService: CitysService,
        private companyService: CompaniesService,
        private profFieldService: ProfFieldService) { }

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
            vacancyDto.city_id ? await this.cityService.getCityById(vacancyDto.city_id) : await this.cityService.createCity(vacancyDto.city);
        vacancy.company =
            vacancyDto.company_id ? await this.companyService.findCompanyById(vacancyDto.company_id) : await this.companyService.createCompany(vacancyDto.company);

        vacancy.prof_fields = [];
        for (const prof of vacancyDto.prof_fields) {
            const newProfField = prof.prof_id ? await this.profFieldService.findProfFieldById(prof.prof_id) : await this.profFieldService.createProfField(prof);

            vacancy.prof_fields.push(newProfField);
        }

        await this.vacancyRepository.save(vacancy);

        return vacancy;
    }

    async deleteVacancy(id: number) {
        await this.vacancyRepository.delete({ vacancy_id: id });
    }

    async updateVacancy(id: number, vacancyDto: CreateVacancyDto) {
        const updatedCity = vacancyDto.city_id ? await this.cityService.getCityById(vacancyDto.city_id) : await this.cityService.createCity(vacancyDto.city);
        const updatedCompany = vacancyDto.company_id ? await this.companyService.findCompanyById(vacancyDto.company_id) : await this.companyService.createCompany(vacancyDto.company);
        const updatedProfFields = [];

        for (const prof of vacancyDto.prof_fields) {
            const newProfField = prof.prof_id ? await this.profFieldService.findProfFieldById(prof.prof_id) : await this.profFieldService.createProfField(prof);

            updatedProfFields.push(newProfField);
        }

        await this.vacancyRepository.update(id, {
            vacancy_name: vacancyDto.vacancy_name,
            salary: vacancyDto.salary,
            description: vacancyDto.description,
            city: updatedCity,
            company: updatedCompany,
            prof_fields: updatedProfFields
        })
    }
}
