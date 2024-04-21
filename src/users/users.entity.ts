import { File } from 'src/file/file.entity';
import { Interest } from 'src/interest/interest.entity';
import { Resume } from 'src/resume/resume.entity';
import { Vacancy } from 'src/vacancy/vacancy.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  user_id: number;

  @Column({ type: 'text' })
  surname: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  patronymic: string;

  @Column({ unique: true, type: 'text' })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  role: string;

  @ManyToMany(() => Vacancy, (vacancy) => vacancy.users)
  @JoinTable({
    name: 'user_vacancy',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'vacancy_id' },
  })
  vacancies: Vacancy[];

  @ManyToMany(() => Interest, (interest) => interest.users)
  @JoinTable({
    name: 'user_interest',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'interest_id' },
  })
  interests: Interest[];

  @OneToOne(() => File)
  @JoinColumn({ name: 'photo_id' })
  photo: File;

  @OneToOne(() => Resume)
  @JoinColumn({ name: 'resume_id' })
  resume: Resume;
}
