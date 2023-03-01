import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { Repository } from 'typeorm';
import { CreateResumeDto } from './dto/create-resume.dto';
import { ResumeResponceDto } from './dto/resume-responce.dto';
import { Resume } from './resume.entity';

@Injectable()
export class ResumeService {
    constructor(
        @InjectRepository(Resume) private resumeRepository: Repository<Resume>,
        private fileService: FileService
    ) { }

    async createResume(dto: CreateResumeDto) {
        const resume = new Resume();

        resume.resume_name = dto.resume_name;
        resume.file =
            dto.file_id ? await this.fileService.getFileById(dto.file_id) : await this.fileService.createFile(dto.file);

        await this.resumeRepository.save(resume);

        return {
            resume_id: resume.resume_id,
            resume_name: resume.resume_name,
            file: resume.file
        }
    }

    async deleteResume(id: number) {
        await this.resumeRepository.delete({ resume_id: id });
    }

    async getResumeById(id: number) {
        const resume = await this.resumeRepository.findOne({
            where: {
                resume_id: id
            }
        });

        return resume;
    }

    async updateResume(id: number, dto: CreateResumeDto) {
        const resume = await this.getResumeById(id);

        resume.resume_name = dto.resume_name;
        resume.file = dto.file_id ? await this.fileService.getFileById(dto.file_id) : await this.fileService.createFile(dto.file);

        await this.resumeRepository.save(resume);
    }

    async getAllResumes() {
        const resumes = await this.resumeRepository.find();

        return resumes.map((x) => new ResumeResponceDto(x));
    }
}
