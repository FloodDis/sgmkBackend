import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { CreateFileDto } from './dto/create-file.dto';
import { FileService } from './file.service';

@Controller('file')
@UseGuards(JwtAuthGuard)
export class FileController {
  constructor(private fileService: FileService) {}

  @Post()
  async createFile(@Body() dto: CreateFileDto) {
    return await this.fileService.createFile(dto);
  }

  @Delete('/:id')
  async deleteFile(@Param('id') id: number) {
    await this.fileService.deleteFile(id);
  }

  @Get()
  @UseGuards(RoleGuard)
  async getAllFiles() {
    return await this.fileService.getAllFiles();
  }

  @Post('/:id')
  async updateFile(@Param('id') id: number, @Body() dto: CreateFileDto) {
    await this.fileService.updateFile(id, dto);
  }
}
