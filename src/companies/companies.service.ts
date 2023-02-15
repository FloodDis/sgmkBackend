import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './companies.entity';
import { CompanyResponceDto } from './dto/company-responce.dto';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {

    constructor(@InjectRepository(Company) private companyRepository: Repository<Company>) { }

    async getAllCompanies() {
        const companies = await this.companyRepository.find();

        return companies.map((x) => new CompanyResponceDto(x));
    }

    async createCompany(companyDto: CreateCompanyDto) {
        const company = new Company();

        company.company_name = companyDto.company_name;

        await this.companyRepository.save(company);

        return company;
    }
}
