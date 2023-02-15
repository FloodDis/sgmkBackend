import { Vacancy } from '../vacancy.entity';


export class VacancyResponseDto {
    constructor(vacancy: Vacancy) {
        this.vacancy_name = vacancy.vacancy_name;
        this.salary = vacancy.salary;
        this.description = vacancy.description;
    }

    vacancy_name: string;
    salary: number;
    description: string;
}