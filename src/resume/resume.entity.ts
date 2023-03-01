import { File } from 'src/file/file.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('resume')
export class Resume {
    @PrimaryGeneratedColumn({ type: 'int' })
    resume_id: number;

    @Column()
    resume_name: string;

    @OneToOne(() => File)
    @JoinColumn({
        name: 'file_id'
    })
    file: File
}