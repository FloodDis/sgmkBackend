import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async login(loginDto: LoginUserDto) {
    const user = await this.validateUser(loginDto);
    return this.generateToken(user);
  }

  async register(registerDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(registerDto.email);

    if (candidate) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(registerDto.password, salt);
    const user = await this.userService.createUser({ ...registerDto, password: hashPassword });

    return this.generateToken(user);
  }

  private async validateUser(loginDto: LoginUserDto) {
    const user = await this.userService.getUserByEmail(loginDto.email);
    const passwordEquals = bcrypt.compare(loginDto.password, user.password);

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Некорректный email или пароль' });
  }

  private async generateToken(user: User) {
    const payload = {
      id: user.user_id,
      name: user.name,
      surname: user.surname,
      patronymic: user.patronymic,
      email: user.email,
      password: user.password,
      role: user.role,
    };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
