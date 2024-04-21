import { User } from '../users.entity';

export class UserResponseDto {
  constructor(user: User) {
    this.user_id = user.user_id;
    this.surname = user.surname;
    this.name = user.name;
    this.patronymic = user.patronymic;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
  }

  user_id: number;
  surname: string;
  name: string;
  patronymic: string;
  email: string;
  password: string;
  role: string;
}
