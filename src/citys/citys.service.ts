import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionsService } from 'src/regions/regions.service';
import { Repository } from 'typeorm';
import { City } from './citys.entity';
import { CityResponceDto } from './dto/city-responce.dto';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CitysService {

    constructor(@InjectRepository(City) private cityRepository: Repository<City>,
        private regionsService: RegionsService) { };

    async getAllCitys() {
        const citys = await this.cityRepository.find();

        return citys.map((x) => new CityResponceDto(x));
    }

    async createCity(dto: CreateCityDto) {
        const city = new City();
        city.city_name = dto.city_name;

        if (dto.region_id) {
            city.region = await this.regionsService.findRegionById(dto.region_id);
        } else if (dto.region) {
            city.region = await this.regionsService.createRegion(dto.region);
        }

        await this.cityRepository.save(city);

        return city;
    }

    async getCityById(id: number) {
        const city = await this.cityRepository.findOne({ where: { city_id: id } });

        return city;
    }

    async deleteCity(id: number) {
        return await this.cityRepository.delete(id);
    }

    async updateCity(id: number, dto: CreateCityDto) {
        return await this.cityRepository.update(id, dto);
    }

}
