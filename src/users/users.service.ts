import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponceDto } from './dto/user-responce.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { };

    async createUser(dto: CreateUserDto) {
        const user = this.userRepository.create(dto);
        await this.userRepository.save(user);
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email } });
        return user;
    }

    async geyAllUsers() {
        const users = this.userRepository.find();
        return (await users).map((x) => new UserResponceDto(x));
    }

    async deleteUser(id: number) {
        await this.userRepository.delete({ user_id: id });
    }

    async updateUser(id: number, dto: CreateUserDto) {
        await this.userRepository.update(id, {
            surname: dto.surname,
            name: dto.name,
            patronymic: dto.patronymic,
            email: dto.email,
            password: dto.password,
            role: dto.role
        });
    }

}
