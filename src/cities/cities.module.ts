import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './cities.entity';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { RegionsModule } from 'src/regions/regions.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([City]), RegionsModule, AuthModule],
  controllers: [CitiesController],
  providers: [CitiesService],
  exports: [CitiesService],
})
export class CitiesModule {}
