import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {

    constructor(private resumeService: ResumeService) { }

    @Post()
    async createResume(@Body() dto: CreateResumeDto) {
        return await this.resumeService.createResume(dto);
    }

    @Delete('/:id')
    async deleteResume(@Param('id') id: number) {
        await this.resumeService.deleteResume(id);
    }

    @Post('/:id')
    async updateResume(@Param('id') id: number, @Body() dto: CreateResumeDto) {
        await this.resumeService.updateResume(id, dto);
    }

    @Get()
    async getAllResumes() {
        await this.resumeService.getAllResumes();
    }
}
