import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './citys.entity';
import { CitysService } from './citys.service';
import { CitysController } from './citys.controller';
import { RegionsModule } from 'src/regions/regions.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([City]),
    RegionsModule,
    AuthModule
  ],
  controllers: [CitysController],
  providers: [CitysService],
  exports: [CitysService]
})
export class CitysModule { }
