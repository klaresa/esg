import {Body, Controller, Get, HttpException, HttpStatus, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDocumentoDto } from "./dto/create-documento.dto";

@Controller('documentos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    try {
      return this.appService.findAll();
    } catch (e) {
      throw new HttpException(e.error, HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async create(@Body() CreateDocumentoDto: CreateDocumentoDto) {
    return await this.appService.create({
      name: CreateDocumentoDto.name,
      description: CreateDocumentoDto.description,
      content: CreateDocumentoDto.content
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.appService.findOne(id);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string) {
    return await this.appService.findByName(name);
  }
}
