import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { InterestController } from './interest.controller';
import { Interest } from './interest.entity';
import { InterestService } from './interest.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Interest]),
    AuthModule
  ],
  controllers: [InterestController],
  providers: [InterestService],
  exports: [InterestService]
})
export class InterestModule { }
