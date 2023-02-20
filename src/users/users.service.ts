import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponceDto } from './dto/user-responce.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { };

    async createUser(userDto: CreateUserDto) {

        const user = new User();

        user.email = userDto.email;
        user.password = userDto.password;
        user.name = userDto.name;
        user.surname = userDto.surname;
        user.patronymic = userDto.patronymic;
        user.role = userDto.role;
        user.vacancies = [];

        await this.userRepository.save(user);

        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email } });

        return user;
    }

    async getAllUsers() {
        const users = this.userRepository.find();

        return (await users).map((x) => new UserResponceDto(x));
    }

    async deleteUser(id: number) {
        await this.userRepository.delete({ user_id: id });
    }

    async updateUser(id: number, userDto: CreateUserDto) {
        await this.userRepository.update(id, {
            surname: userDto.surname,
            name: userDto.name,
            patronymic: userDto.patronymic,
            email: userDto.email,
            password: userDto.password,
            role: userDto.role
        });
    }

}
