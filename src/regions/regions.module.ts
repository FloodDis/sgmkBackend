import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RegionsController } from './regions.controller';
import { Region } from './regions.entity';
import { RegionsService } from './regions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Region]), AuthModule],
  controllers: [RegionsController],
  providers: [RegionsService],
  exports: [RegionsService],
})
export class RegionsModule {}
