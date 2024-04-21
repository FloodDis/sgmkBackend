import { City } from '../cities.entity';

export class CityResponseDto {
  constructor(city: City) {
    this.city_id = city.city_id;
    this.city_name = city.city_name;
  }

  city_name: string;
  city_id: number;
}
