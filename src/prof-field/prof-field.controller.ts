import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProfFieldDto } from './dto/create-prof-field.dto';
import { ProfFieldService } from './prof-field.service';

@Controller('prof-field')
export class ProfFieldController {

    constructor(private profFieldService: ProfFieldService) { }

    @Post()
    createProfField(@Body() profDto: CreateProfFieldDto) {
        return this.profFieldService.createProfField(profDto);
    }

    @Get()
    getAllProfFields() {
        return this.profFieldService.getAllProfFields();
    }

    @Delete('/:id')
    deleteProfField(@Param('id') id: number) {
        this.profFieldService.deleteProfField(id);
    }

    @Post('/:id')
    updateProfField(@Param('id') id: number, @Body() dto: CreateProfFieldDto) {
        this.profFieldService.updateProfField(id, dto);
    }
}
