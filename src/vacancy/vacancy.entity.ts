import { City } from 'src/citys/citys.entity';
import { Company } from 'src/companies/companies.entity';
import { ProfField } from 'src/prof-field/prof-field.entity';
import { User } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('vacancy')
export class Vacancy {

    @PrimaryGeneratedColumn({ type: 'int' })
    vacancy_id: number;

    @Column({ type: 'text' })
    vacancy_name: string;

    @Column({ type: 'money' })
    salary: number;

    @Column({ type: 'text' })
    description: string;

    @ManyToOne(() => City, (city) => city.vacancies)
    @JoinColumn({ name: 'city_id' })
    city: City;

    @ManyToMany(() => User, (user) => user.vacancies)
    users: User[];

    @ManyToMany(() => ProfField, (profField) => profField.vacancies)
    @JoinTable({
        name: 'vacancy_prof-field',
        joinColumn: {
            name: 'vacancy_id'
        },
        inverseJoinColumn: {
            name: 'prof-field_id'
        }
    })
    prof_fields: ProfField[];

    @ManyToOne(() => Company, (company) => company.vacancies)
    @JoinColumn({ name: 'company_id' })
    company: Company;
}