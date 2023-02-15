import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfFieldDto } from './dto/create-prof-field.dto';
import { ProfFieldResponceDto } from './dto/prof-field-responce.dto';
import { ProfField } from './prof-field.entity';

@Injectable()
export class ProfFieldService {

    constructor(@InjectRepository(ProfField) private profRepository: Repository<ProfField>) { };

    async getAllProfFields() {
        const profFields = this.profRepository.find();
        return (await profFields).map((x) => new ProfFieldResponceDto(x));
    }

    async createProfField(profDto: CreateProfFieldDto) {
        const profField = this.profRepository.create(profDto);
        this.profRepository.save(profField);
        return profField;
    }

    /* async getProfFieldsById(profFieldsId: number[]) {
        let profFields: ProfField[];
        let profFieldValue: ProfField;
        for (let i = 0; i < profFieldsId.length; i++) {
            profFieldValue = this.profRepository.find({ where: { 
                prof_id: profFieldsId[i]
            }});
            
        }
    } */
}
