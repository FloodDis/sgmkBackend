import { CreateCityDto } from 'src/cities/dto/create-city.dto';
import { CreateCompanyDto } from 'src/companies/dto/create-company.dto';
import { CreateProfFieldDto } from 'src/prof-field/dto/create-prof-field.dto';

export class CreateVacancyDto {
  readonly vacancy_name: string;
  readonly salary: number;
  readonly description: string;
  readonly city?: CreateCityDto;
  readonly city_id?: number;
  readonly company?: CreateCompanyDto;
  readonly company_id?: number;
  readonly prof_fields?: CreateProfFieldDto[];
}
