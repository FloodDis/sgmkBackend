import { Vacancy } from 'src/vacancy/vacancy.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('citys')
export class City {

    @PrimaryGeneratedColumn({ type: 'int' })
    city_id: number;

    @Column({ type: 'text', nullable: true, unique: true })
    city_name: string;

    @OneToMany(() => Vacancy, (vacancy) => vacancy.city)
    vacancies: Vacancy[];
}