import { CreateVacancyDto } from 'src/vacancy/dto/create-vacancy.dto';

export class CreateCompanyDto {

    readonly company_name: string;

    readonly vacancy: CreateVacancyDto;
}