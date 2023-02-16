import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        this.usersService.createUser(userDto);
    }

    @Get()
    getAllUsers() {
        return this.usersService.geyAllUsers();
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: number) {
        this.usersService.deleteUser(id);
    }

    @Post('/:id')
    updateUser(@Param('id') id: number, @Body() dto: CreateUserDto) {
        this.usersService.updateUser(id, dto);
    }
}
