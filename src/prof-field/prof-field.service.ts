import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfFieldDto } from './dto/create-prof-field.dto';
import { ProfFieldResponseDto } from './dto/prof-field-response.dto';
import { ProfField } from './prof-field.entity';

@Injectable()
export class ProfFieldService {
  constructor(@InjectRepository(ProfField) private profRepository: Repository<ProfField>) {}

  async getAllProfFields() {
    const profFields = this.profRepository.find();

    return (await profFields).map((x) => new ProfFieldResponseDto(x));
  }

  async createProfField(profDto: CreateProfFieldDto) {
    const profField = new ProfField();

    profField.prof_name = profDto.prof_name;

    await this.profRepository.save(profField);

    return profField;
  }

  async findProfFieldById(id: number) {
    const profField = this.profRepository.findOne({ where: { prof_id: id } });

    return profField;
  }

  async deleteProfField(id: number) {
    this.profRepository.delete({ prof_id: id });
  }

  async updateProfField(id: number, dto: CreateProfFieldDto) {
    this.profRepository.update(id, { prof_name: dto.prof_name });
  }
}
