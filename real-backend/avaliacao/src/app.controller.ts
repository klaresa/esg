import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAvaliacaoDto } from "./dto/create-avaliacao.dto";
import { UpdateAvaliacaoDto } from "./dto/update-avaliacao.dto";
import mongoose from "mongoose";

@Controller('avaliacao')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  findAll() {
    try {
      return this.appService.findAll();
    } catch (e) {
      throw new HttpException(e.error, HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return await this.appService.create({
      avaliacaoNome: createAvaliacaoDto.avaliacaoNome,
      empresa: createAvaliacaoDto.empresa,
      documento: createAvaliacaoDto.documento,
    });
  }

  @Get('/name/:name')
  async findByName(@Param('name') name: string) {
    console.log(`nameeeeeeeeeeeee: ${name}`)
    return await this.appService.findByName(name);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if (id) {
      try {
        return await this.appService.findOne(id);
      } catch (e) {
        throw new HttpException('Id not found', HttpStatus.NOT_FOUND)
      }
    }
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);

    console.log(`id: ${id}`)
    return await this.appService.update(id, updateAvaliacaoDto);
  }

  // @Get(':id')
  // findOneById(@Param('id') id: string) {
  //   return this.appService.create(id);
  // }
}
