import { City } from 'src/citys/citys.entity';
import { Company } from 'src/companies/companies.entity';
import { ProfField } from 'src/prof-field/prof-field.entity';
import { User } from 'src/users/users.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('vacancies')
export class Vacancy {

    @PrimaryGeneratedColumn({ type: 'int' })
    vacancy_id: number;

    @Column({ type: 'text' })
    vacancy_name: string;

    @Column({ type: 'money' })
    salary: number;

    @Column({ type: 'text' })
    description: string;

    @ManyToOne(() => City, (city) => city.vacancies, { onDelete: 'CASCADE' })
    city: City;

    @ManyToMany(() => User, (user) => user.vacancies)
    @JoinTable({ name: 'users-vacancy' })
    users: User[];

    @ManyToMany(() => ProfField, (profField) => profField.vacancies)
    @JoinTable({ name: 'prof_field-vacancy' })
    prof_fields: ProfField[];

    @ManyToOne(() => Company, (company) => company.vacancies)
    company: Company;
}