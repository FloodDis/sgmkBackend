import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './companies.entity';
import { CompanyResponseDto } from './dto/company-response.dto';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
  constructor(@InjectRepository(Company) private companyRepository: Repository<Company>) {}

  async getAllCompanies() {
    const companies = await this.companyRepository.find();

    return companies.map((x) => new CompanyResponseDto(x));
  }

  async createCompany(companyDto: CreateCompanyDto) {
    const company = new Company();
    company.company_name = companyDto.company_name;
    await this.companyRepository.save(company);

    return company;
  }

  async deleteCompany(id: number) {
    return await this.companyRepository.delete(id);
  }

  async updateCompany(id: number, dto: CreateCompanyDto) {
    return await this.companyRepository.update(id, dto);
  }

  async findCompanyById(id: number) {
    return await this.companyRepository.findOne({ where: { company_id: id } });
  }
}
