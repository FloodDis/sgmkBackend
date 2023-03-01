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
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        User,
        City,
        ProfField,
        Vacancy,
        Region,
        Company,
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
