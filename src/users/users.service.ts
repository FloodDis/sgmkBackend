import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { InterestService } from 'src/interest/interest.service';
import { VacancyService } from 'src/vacancy/vacancy.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateInterestsDto } from './dto/update-interests.dto';
import { UpdateVacanciesDto } from './dto/update-vacancies.dto';
import { UserResponceDto } from './dto/user-responce.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private vacancyService: VacancyService,
        private interestService: InterestService,
        private fileService: FileService
    ) { };

    async createUser(userDto: CreateUserDto) {

        const user = new User();

        user.email = userDto.email;
        user.password = userDto.password;
        user.name = userDto.name;
        user.surname = userDto.surname;
        user.patronymic = userDto.patronymic;
        user.role = userDto.role;
        user.vacancies = [];
        user.interests = [];

        await this.userRepository.save(user);

        return user;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({ where: { user_id: id } });

        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email: email } });

        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.find();

        return users.map((x) => new UserResponceDto(x));
    }

    async deleteUser(id: number) {
        await this.userRepository.delete({ user_id: id });
    }

    async updateUser(id: number, userDto: CreateUserDto) {
        const user = await this.getUserById(id);

        user.surname = userDto.surname;
        user.name = userDto.name;
        user.patronymic = userDto.patronymic;
        user.email = userDto.email;
        user.password = userDto.password;
        user.role = userDto.role;

        const photo = await this.fileService.getFileById(userDto.photo_id);
        user.photo = photo;

        this.userRepository.save(user);
    }

    async updateVacancies(userId: number, vacanciesId: UpdateVacanciesDto) {
        const userToUpdate = await this.userRepository.findOne({ where: { user_id: userId } });
        userToUpdate.vacancies = [];

        for (const id of vacanciesId.vacancies_id) {
            const vacancy = await this.vacancyService.getVacancyById(id);
            userToUpdate.vacancies.push(vacancy);
        }

        await this.userRepository.save(userToUpdate);
    }

    async updateInterests(userId: number, interestsId: UpdateInterestsDto) {
        const userToUpdate = await this.userRepository.findOne({ where: { user_id: userId } });
        userToUpdate.interests = [];

        for (const id of interestsId.interests_id) {
            const interest = await this.interestService.getInterestById(id);
            userToUpdate.interests.push(interest);
        }

        await this.userRepository.save(userToUpdate);
    }

}
