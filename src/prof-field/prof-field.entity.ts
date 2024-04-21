import { Vacancy } from 'src/vacancy/vacancy.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('prof-field')
export class ProfField {
  @PrimaryGeneratedColumn({ type: 'int' })
  prof_id: number;

  @Column({ type: 'text', nullable: true, unique: true })
  prof_name: string;

  @ManyToMany(() => Vacancy, (vacancy) => vacancy.prof_fields)
  vacancies: Vacancy[];
}
