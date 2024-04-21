import { Region } from 'src/regions/regions.entity';
import { Vacancy } from 'src/vacancy/vacancy.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn({ type: 'int' })
  city_id: number;

  @Column({ type: 'text', nullable: true, unique: true })
  city_name: string;

  @OneToMany(() => Vacancy, (vacancy) => vacancy.city)
  vacancies: Vacancy[];

  @ManyToOne(() => Region, (region) => region.cities)
  @JoinColumn({ name: 'region_id' })
  region: Region;
}
