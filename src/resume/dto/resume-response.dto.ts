import { File } from 'src/file/file.entity';
import { Resume } from '../resume.entity';

export class ResumeResponseDto {
  constructor(resume: Resume) {
    this.resume_id = resume.resume_id;
    this.resume_name = resume.resume_name;
    this.file = resume.file;
  }

  resume_id: number;
  resume_name: string;
  file: File;
}
