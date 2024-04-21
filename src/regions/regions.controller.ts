import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { CreateRegionDto } from './dto/create-region.dto';
import { RegionsService } from './regions.service';

@Controller('region')
@UseGuards(JwtAuthGuard)
export class RegionsController {
  constructor(private regionService: RegionsService) {}

  @Get()
  async getAllRegions() {
    return await this.regionService.getAllRegions();
  }

  @Post()
  @UseGuards(RoleGuard)
  async createRegion(@Body() regionDto: CreateRegionDto) {
    await this.regionService.createRegion(regionDto);
  }

  @Delete('/:id')
  @UseGuards(RoleGuard)
  async deleteRegion(@Param('id') id: number) {
    await this.regionService.deleteRegion(id);
  }

  @Post('/:id')
  @UseGuards(RoleGuard)
  async updateRegion(@Param('id') id: number, @Body() dto: CreateRegionDto) {
    await this.regionService.updateRegion(id, dto);
  }
}
