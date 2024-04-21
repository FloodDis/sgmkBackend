import { CreateRegionDto } from 'src/regions/dto/create-region.dto';

export class CreateCityDto {
  readonly city_name: string;
  readonly region_id?: number;
  readonly region?: CreateRegionDto;
}
