import { File } from '../file.entity';

export class FileResponceDto {

    constructor(file: File) {
        this.file_id = file.file_id;
        this.file_type = file.file_type;
        this.file_size = file.file_size;
        this.file_path = file.file_path;
    }

    file_id: number;
    file_type: string;
    file_size: number;
    file_path: string;
}