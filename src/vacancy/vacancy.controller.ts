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
    async getAllVacancies() {
        return await this.vacancyService.getAllVacancies();
    }

    @Post('/sort')
    async getFilterVacancies(@Query('cityIds', new ParseArrayPipe({ items: Number, separator: ',' }))
    cityIds: number[]
    ) {
        return await this.getFilterVacancies(cityIds);
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

