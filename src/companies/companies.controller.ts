import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('company')
@UseGuards(JwtAuthGuard)
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Get()
  async getAllCompanies() {
    return await this.companiesService.getAllCompanies();
  }

  @Post()
  @UseGuards(RoleGuard)
  async createCompany(@Body() companyDto: CreateCompanyDto) {
    await this.companiesService.createCompany(companyDto);
  }

  @Delete('/:id')
  @UseGuards(RoleGuard)
  async deleteCompany(@Param('id') id: number) {
    await this.companiesService.deleteCompany(id);
  }

  @Post('/:id')
  @UseGuards(RoleGuard)
  async updateCompany(@Param('id') id: number, @Body() dto: CreateCompanyDto) {
    await this.companiesService.updateCompany(id, dto);
  }
}
