import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('companies')
export class CompaniesController {

    constructor(private companiesService: CompaniesService) { }

    @Get()
    getAllCompanies() {
        return this.companiesService.getAllCompanies();
    }

    @Post()
    createCompany(@Body() companyDto: CreateCompanyDto) {
        this.companiesService.createCompany(companyDto);
    }

    @Delete('/:id')
    deleteCompany(@Param('id') id: number) {
        this.companiesService.deleteCompany(id);
    }
}
