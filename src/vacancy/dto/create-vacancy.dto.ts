import { CreateCityDto } from 'src/citys/dto/create-city.dto';
import { CreateProfFieldDto } from 'src/prof-field/dto/create-prof-field.dto';

export class CreateVacancyDto {

    readonly vacancy_name: string;

    readonly salary: number;

    readonly description: string;

    readonly city?: CreateCityDto;
    readonly cityId?: number;

    readonly prof_fields: CreateProfFieldDto[];
}