import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './user.service';
import { CreateAuthDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('User')
@Controller('User')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({summary: 'Criar novo usuário.'})
  create(@Body() createAuthDto: CreateAuthDto) {
   try {
     return this.authService.create(createAuthDto);
   } catch (error) {
    console.log(error)
   }
  }

  @Get()
  @ApiOperation({summary: 'Pesquisar todos os usuários.'})
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Pesquisar um usuário por id.'})
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Alterar dados do usuário.'})
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Deletar um Usuário.'})
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}

