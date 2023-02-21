import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacancyModule } from 'src/vacancy/vacancy.module';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    VacancyModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
