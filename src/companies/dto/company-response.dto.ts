import { Company } from '../companies.entity';

export class CompanyResponseDto {
  constructor(company: Company) {
    this.company_id = company.company_id;
    this.company_name = company.company_name;
  }

  company_id: number;
  company_name: string;
}
