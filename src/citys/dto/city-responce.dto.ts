import { City } from '../citys.entity';


export class CityResponceDto {
    constructor(city: City) {
        this.city_name = city.city_name;
    }

    city_name: string;
}