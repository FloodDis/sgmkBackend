import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('company')
export class CompaniesController {

    constructor(private companiesService: CompaniesService) { }

    @Get()
    async getAllCompanies() {
        return await this.companiesService.getAllCompanies();
    }

    @Post()
    async createCompany(@Body() companyDto: CreateCompanyDto) {
        await this.companiesService.createCompany(companyDto);
    }

    @Delete('/:id')
    async deleteCompany(@Param('id') id: number) {
        await this.companiesService.deleteCompany(id);
    }

    @Post('/:id')
    async updateCompany(@Param('id') id: number, @Body() dto: CreateCompanyDto) {
        await this.companiesService.updateCompany(id, dto);
    }
}
