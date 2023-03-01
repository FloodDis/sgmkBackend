import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInterestDto } from './dto/create-interest.dto';
import { InterestResponceDto } from './dto/interest-responce.dto';
import { Interest } from './interest.entity';

@Injectable()
export class InterestService {

    constructor(@InjectRepository(Interest) private interestRepository: Repository<Interest>) { }

    async createInterest(dto: CreateInterestDto) {
        const interest = new Interest();
        interest.interest_name = dto.interest_name;
        await this.interestRepository.save(interest);

        return { interest_id: interest.interest_id };
    }

    async deleteInterest(id: number) {
        await this.interestRepository.delete({ interest_id: id });
    }

    async updateInterest(id: number, dto: CreateInterestDto) {
        const interest = await this.findInterestById(id);
        interest.interest_name = dto.interest_name;
        await this.interestRepository.save(interest);
    }

    async findInterestById(id: number) {
        const interest = await this.interestRepository.findOne({
            where: {
                interest_id: id
            }
        })

        return interest;
    }

    async getAllInterests() {
        const interests = await this.interestRepository.find();

        return interests.map((x) => new InterestResponceDto(x))
    }
}
