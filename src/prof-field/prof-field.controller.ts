import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
