import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { RegionResponceDto } from './dto/region-responce.dto';
import { Region } from './regions.entity';

@Injectable()
export class RegionsService {
    constructor(@InjectRepository(Region) private regionRepository: Repository<Region>) { }

    async getAllRegions() {
        const regions = await this.regionRepository.find();

        return regions.map((x) => new RegionResponceDto(x));
    }

    async createRegion(regionDto: CreateRegionDto) {
        const region = new Region();
        region.region_name = regionDto.region_name;
        this.regionRepository.save(region);

        return region;
    }

    async deleteRegion(id: number) {
        await this.regionRepository.delete({ region_id: id });
    }

    async updateRegion(id: number, dto: CreateRegionDto) {
        this.regionRepository.update(id, { region_name: dto.region_name });
    }

    async findRegionById(id: number) {
        const region = await this.regionRepository.findOne({ where: { region_id: id } });

        return region;
    }
}
