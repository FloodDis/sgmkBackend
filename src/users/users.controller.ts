import { Controller, Post, Body, Get, Param, Delete, Header, Headers, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateVacanciesDto } from './dto/update-vacancies.dto';
import { UsersService } from './users.service';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    async createUser(@Body() userDto: CreateUserDto) {
        await this.usersService.createUser(userDto);
    }

    @Get()
    @UseGuards(RoleGuard)
    async getAllUsers() {
        return await this.usersService.getAllUsers();
    }

    @Delete('/:id')
    @UseGuards(RoleGuard)
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
