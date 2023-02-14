import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './citys.entity';
import { CitysService } from './citys.service';
import { CitysController } from './citys.controller';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CitysController],
  providers: [CitysService],
  exports: [CitysService]
})
export class CitysModule { }
