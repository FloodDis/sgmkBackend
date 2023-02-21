import { Controller, Post, Body, Get, Param, Delete, Header, Headers } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateVacanciesDto } from './dto/update-vacancies.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    async createUser(@Body() userDto: CreateUserDto) {
        await this.usersService.createUser(userDto);
    }

    @Get()
    async getAllUsers() {
        return await this.usersService.getAllUsers();
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: number) {
        await this.usersService.deleteUser(id);
    }

    @Post('/vacancy')
    async updateUserVacancy(@Headers('X-USER-ID') userId: number, @Body() vacanciesId: UpdateVacanciesDto) {
        await this.usersService.updateVacancies(userId, vacanciesId);
    }

    @Post('/:id')
    async updateUser(@Param('id') id: number, @Body() dto: CreateUserDto) {
        await this.usersService.updateUser(id, dto);
    }

}
