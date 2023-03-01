import { CreateFileDto } from 'src/file/dto/create-file.dto';

export class CreateResumeDto {
    readonly resume_name: string;

    readonly file_id?: number;

    readonly file?: CreateFileDto;
}