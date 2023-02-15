import { Region } from '../regions.entity';


export class RegionResponceDto {
    constructor(region: Region) {
        this.region_id = region.region_id;
        this.region_name = region.region_name;
    }

    region_id: number;
    region_name: string;
}