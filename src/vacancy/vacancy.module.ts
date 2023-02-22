import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CitysModule } from 'src/citys/citys.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { ProfFieldModule } from 'src/prof-field/prof-field.module';
import { VacancyController } from './vacancy.controller';
import { Vacancy } from './vacancy.entity';
import { VacancyService } from './vacancy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vacancy]),
    CitysModule,
    CompaniesModule,
    ProfFieldModule,
    AuthModule
  ],
  controllers: [VacancyController],
  providers: [VacancyService],
  exports: [VacancyService]
})
export class VacancyModule { }
