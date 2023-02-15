import { Vacancy } from 'src/vacancy/vacancy.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('companies')
export class Company {

    @PrimaryGeneratedColumn()
    company_id: number;

    @Column({ type: 'text' })
    company_name: string;

    @OneToMany(() => Vacancy, (vacancy) => vacancy.city)
    vacancies: Vacancy[];
}