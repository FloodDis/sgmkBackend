import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { FileResponceDto } from './dto/file-responce.dto';
import { File } from './file.entity';

@Injectable()
export class FileService {

    constructor(@InjectRepository(File) private fileRepository: Repository<File>) { }

    async createFile(dto: CreateFileDto) {
        const newFile = new File();
        newFile.file_path = dto.file_path;
        newFile.file_size = dto.file_size;
        newFile.file_type = dto.file_type;

        await this.fileRepository.save(newFile);

        return {
            file_id: newFile.file_id,
            file_path: newFile.file_path,
            file_size: newFile.file_size,
            file_type: newFile.file_type
        };
    }

    async deleteFile(id: number) {
        await this.fileRepository.delete({ file_id: id });
    }

    async getAllFiles() {
        const files = await this.fileRepository.find();

        return files.map((x) => new FileResponceDto(x))
    }

    async getFileById(id: number) {
        const file = this.fileRepository.findOne({
            where: {
                file_id: id
            }
        })

        return file;
    }

    async updateFile(id: number, dto: CreateFileDto) {
        const file = await this.getFileById(id);

        file.file_path = dto.file_path;
        file.file_size = dto.file_size;
        file.file_type = dto.file_type;

        await this.fileRepository.save(file);
    }
}
