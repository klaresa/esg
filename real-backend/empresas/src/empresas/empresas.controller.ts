import mongoose from "mongoose";
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from '../users/users.service';
import { EmpresasService } from './empresas.service';

import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { RegisterEmpresaDto } from './dto/register-empresa.dto';


@Controller('empresas')
export class EmpresasController {
  constructor(
    private readonly empresasService: EmpresasService,
    private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Body() registerEmpresaDto: RegisterEmpresaDto) {

    // separar o email e senha para a criacao do user c/ userService
    const newUser = await this.usersService.create({
      type: registerEmpresaDto.type,
      username: registerEmpresaDto.username,
      password: registerEmpresaDto.password
    });

    console.log('newuser', newUser);

    // retornar o user criado e cadastrar o candidato com o userID
    // na pior das hipoteses usar o username p achar
    return await this.empresasService.create({
      userId: newUser._id,
      nome: registerEmpresaDto.nome,
      contato: {
        telefone: registerEmpresaDto.contato.telefone,
        endereco: registerEmpresaDto.contato.endereco
      }
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.empresasService.findAll();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.empresasService.findOne(id);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string) {
    return await this.empresasService.findByName(name);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('find-by-userId/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return await this.empresasService.findByUserId(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.empresasService.update(id, updateEmpresaDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new HttpException('Invalid Id', HttpStatus.NOT_FOUND);
    return this.empresasService.remove(id);
  }
}
