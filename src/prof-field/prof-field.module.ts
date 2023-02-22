import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProfFieldController } from './prof-field.controller';
import { ProfField } from './prof-field.entity';
import { ProfFieldService } from './prof-field.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfField]),
    AuthModule
  ],
  controllers: [ProfFieldController],
  providers: [ProfFieldService],
  exports: [ProfFieldService]
})
export class ProfFieldModule { }
