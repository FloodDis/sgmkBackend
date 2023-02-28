import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { VacancyService } from './vacancy.service';

@Controller('vacancy')
@UseGuards(JwtAuthGuard)
export class VacancyController {

    constructor(private vacancyService: VacancyService) { }

    @Get()
    async getFilterVacancies(
        @Query('cityIds', new ParseArrayPipe({ items: Number, separator: ',', optional: true }))
        cityIds?: number[],
        @Query('profFieldIds', new ParseArrayPipe({ items: Number, separator: ',', optional: true }))
        profFieldIds?: number[]
    ) {
        return await this.vacancyService.getFilterVacancies(cityIds, profFieldIds);
    }

    @Post()
    @UseGuards(RoleGuard)
    async createVacancy(@Body() vacancyDto: CreateVacancyDto) {
        await this.vacancyService.createVacancy(vacancyDto);
    }

    @Delete('/:id')
    @UseGuards(RoleGuard)
    async deleteVacancy(@Param('id') id: number) {
        await this.vacancyService.deleteVacancy(id);
    }

    @Post('/:id')
    @UseGuards(RoleGuard)
    async updateVacancy(@Param('id') id: number, @Body() dto: CreateVacancyDto) {
        await this.vacancyService.updateVacancy(id, dto);
    }
}

