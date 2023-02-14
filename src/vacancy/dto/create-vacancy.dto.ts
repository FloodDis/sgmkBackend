import { ProfField } from 'src/prof-field/prof-field.entity';
import { User } from 'src/users/users.entity';

export class CreateVacancyDto {

    readonly vacancy_name: string;

    readonly salary: number;

    readonly description: string;

    readonly city_id: number;

    readonly prof_fields: number[];
}