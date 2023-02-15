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
        const regions = this.regionRepository.find();

        return (await regions).map((x) => new RegionResponceDto(x));
    }

    async createRegion(regionDto: CreateRegionDto) {
        const region = new Region();
        region.region_name = regionDto.region_name;
        this.regionRepository.save(region);

        return region;
    }
}
