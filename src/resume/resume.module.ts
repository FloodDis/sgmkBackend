import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ResumeController } from './resume.controller';
import { Resume } from './resume.entity';
import { ResumeService } from './resume.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Resume]),
    AuthModule
  ],
  controllers: [ResumeController],
  providers: [ResumeService]
})
export class ResumeModule { }
