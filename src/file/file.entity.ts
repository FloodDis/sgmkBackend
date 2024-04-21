import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('file')
export class File {
  @PrimaryGeneratedColumn({ type: 'int' })
  file_id: number;

  @Column('text')
  file_type: string;

  @Column('numeric')
  file_size: number;

  @Column('text')
  file_path: string;
}
