import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { CreateProfFieldDto } from './dto/create-prof-field.dto';
import { ProfFieldService } from './prof-field.service';

@Controller('prof-field')
@UseGuards(JwtAuthGuard)
export class ProfFieldController {

    constructor(private profFieldService: ProfFieldService) { }

    @Post()
    @UseGuards(RoleGuard)
    async createProfField(@Body() profDto: CreateProfFieldDto) {
        return await this.profFieldService.createProfField(profDto);
    }

    @Get()
    async getAllProfFields() {
        return await this.profFieldService.getAllProfFields();
    }

    @Delete('/:id')
    @UseGuards(RoleGuard)
    async deleteProfField(@Param('id') id: number) {
        await this.profFieldService.deleteProfField(id);
    }

    @Post('/:id')
    @UseGuards(RoleGuard)
    async updateProfField(@Param('id') id: number, @Body() dto: CreateProfFieldDto) {
        await this.profFieldService.updateProfField(id, dto);
    }
}
