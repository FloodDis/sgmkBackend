import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitysModule } from 'src/citys/citys.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { VacancyController } from './vacancy.controller';
import { Vacancy } from './vacancy.entity';
import { VacancyService } from './vacancy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vacancy]),
    CitysModule,
    CompaniesModule
  ],
  controllers: [VacancyController],
  providers: [VacancyService]
})
export class VacancyModule { }
