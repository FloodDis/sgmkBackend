import { User } from 'src/users/users.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('interest')
export class Interest {

    @PrimaryGeneratedColumn({ type: 'int' })
    interest_id: number;

    @Column('text')
    interest_name: string;

    @ManyToMany(() => User, (user) => user.interests)
    users: User[];
}