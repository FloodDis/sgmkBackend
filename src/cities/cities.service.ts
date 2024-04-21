import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionsService } from 'src/regions/regions.service';
import { Repository } from 'typeorm';
import { City } from './cities.entity';
import { CityResponseDto } from './dto/city-response.dto';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
    private regionsService: RegionsService,
  ) {}

  async getAllCities() {
    const citys = await this.cityRepository.find();

    return citys.map((x) => new CityResponseDto(x));
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
    const cityToUpdate = await this.cityRepository.findOne({ where: { city_id: id } });

    cityToUpdate.city_name = dto.city_name;
    cityToUpdate.region = dto.region_id
      ? await this.regionsService.findRegionById(dto.region_id)
      : await this.regionsService.createRegion(dto.region);

    return await this.cityRepository.update(id, dto);
  }
}
