import { Region } from 'src/regions/regions.entity';
import { Vacancy } from 'src/vacancy/vacancy.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('citys')
export class City {

    @PrimaryGeneratedColumn({ type: 'int' })
    city_id: number;

    @Column({ type: 'text', nullable: true, unique: true })
    city_name: string;

    @OneToMany(() => Vacancy, (vacancy) => vacancy.city, { onDelete: 'CASCADE' })
    vacancies: Vacancy[];

    @ManyToOne(() => Region, (region) => region.cities, { onDelete: 'CASCADE' })
    region: Region;
}