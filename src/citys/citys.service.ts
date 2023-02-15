import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './citys.entity';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CitysService {

    constructor(@InjectRepository(City) private cityRepository: Repository<City>) { };

    async getAllCitys() {
        const citys = await this.cityRepository.find();
        return citys;
    }

    async createCity(dto: CreateCityDto) {
        const city = this.cityRepository.create(dto);
        await this.cityRepository.save(city);
        return city;
    }

    async getCityById(id: number) {
        const city = this.cityRepository.findOne({ where: { city_id: id } });
        return city;
    }

}
