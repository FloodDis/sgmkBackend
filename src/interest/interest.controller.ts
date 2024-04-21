import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { CreateInterestDto } from './dto/create-interest.dto';
import { InterestService } from './interest.service';

@Controller('interest')
@UseGuards(JwtAuthGuard)
export class InterestController {
  constructor(private interestService: InterestService) {}

  @Post()
  @UseGuards(RoleGuard)
  async createInterest(@Body() dto: CreateInterestDto) {
    return await this.interestService.createInterest(dto);
  }

  @Delete('/:id')
  @UseGuards(RoleGuard)
  async deleteInterest(@Param('id') id: number) {
    await this.interestService.deleteInterest(id);
  }

  @Post('/:id')
  @UseGuards(RoleGuard)
  async updateInterest(@Param('id') id: number, @Body() dto: CreateInterestDto) {
    await this.interestService.updateInterest(id, dto);
  }

  @Get()
  async getAllInterests() {
    return await this.interestService.getAllInterests();
  }
}
