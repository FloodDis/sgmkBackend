import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitysModule } from 'src/citys/citys.module';
import { VacancyController } from './vacancy.controller';
import { Vacancy } from './vacancy.entity';
import { VacancyService } from './vacancy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vacancy]),
    CitysModule
  ],
  controllers: [VacancyController],
  providers: [VacancyService]
})
export class VacancyModule { }
