import { CreateFileDto } from 'src/file/dto/create-file.dto';
import { File } from 'src/file/file.entity';
import { CreateResumeDto } from 'src/resume/dto/create-resume.dto';


export class CreateUserDto {

    readonly surname: string;

    readonly name: string;

    readonly patronymic: string;

    readonly email: string;

    readonly password: string;

    readonly role: string;

    readonly photo_id?: number;
    readonly photo?: CreateFileDto;

    readonly resume_id?: number;
    readonly resume: CreateResumeDto;
}