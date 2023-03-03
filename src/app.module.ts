import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config";
import { User } from './users/users.entity';
import { CitysModule } from './citys/citys.module';
import { City } from './citys/citys.entity';
import { ProfFieldModule } from './prof-field/prof-field.module';
import { ProfField } from './prof-field/prof-field.entity';
import { VacancyModule } from './vacancy/vacancy.module';
import { Vacancy } from './vacancy/vacancy.entity';
import { RegionsModule } from './regions/regions.module';
import { Region } from './regions/regions.entity';
import { CompaniesModule } from './companies/companies.module';
import { Company } from './companies/companies.entity';
import { AuthModule } from './auth/auth.module';
import { InterestModule } from './interest/interest.module';
import { FileModule } from './file/file.module';
import { Interest } from './interest/interest.entity';
import { File } from './file/file.entity';
import { ResumeModule } from './resume/resume.module';
import { Resume } from './resume/resume.entity';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      entities: [
        User,
        City,
        ProfField,
        Vacancy,
        Region,
        Company,
        Interest,
        File,
        Resume
      ],
      autoLoadEntities: true,
      synchronize: true
    }),
    CitysModule,
    ProfFieldModule,
    VacancyModule,
    RegionsModule,
    CompaniesModule,
    AuthModule,
    InterestModule,
    FileModule,
    ResumeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
