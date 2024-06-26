import { City } from 'src/cities/cities.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('region')
export class Region {
  @PrimaryGeneratedColumn()
  region_id: number;

  @Column({ type: 'text' })
  region_name: string;

  @OneToMany(() => City, (city) => city.region)
  cities: City[];
}
