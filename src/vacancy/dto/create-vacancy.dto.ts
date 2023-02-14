import { City } from 'src/citys/citys.entity';
import { ProfField } from 'src/prof-field/prof-field.entity';
import { User } from 'src/users/users.entity';

export class CreateVacancyDto {

    readonly vacancy_name: string;

    readonly salary: number;

    readonly description: string;

    readonly city: City;

    readonly prof_fields: ProfField[];
}