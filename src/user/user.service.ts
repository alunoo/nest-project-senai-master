import { Injectable } from '@nestjs/common';
import { CreateUserDto as CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto as UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    this.prismaService.user
      .create({ data: createUserDto })
      .then((res) => {
        console.log('Usuário cadastrado');
        return res;
      })
      .catch((error) => {
        throw Error(`Error ao cadastrar usuário: ${error}`);
      });
  }

  async findAll() {
    const data: User[] = await this.prismaService.user.findMany();
    data.forEach((element) => {
      delete element.password;
    });
    return data;
    // return `This action returns all auth`;
  }

  async findOne(id: string) {
    const data: User = await this.prismaService.user.findUnique({
      where: { id },
    });

    try {
      delete data.password;

      return data;
    } catch (error) {
      return 'ID de usuário não existente !';
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const data: User = await this.prismaService.user.update({
        where: { id },
        data: updateUserDto,
      });

      delete data.password;

      return data;
    } catch (error) {
      return 'ID de usuário não existente !';
    }
  }

  async remove(id: string) {
    try {
      await this.prismaService.user.delete({ where: {id} });
    } catch (error) {
      return 'ID de usuário não existente !';
    }
    return `This action removes a user: #${id} `;
  }
}
function findMany() {
  throw new Error('Function not implemented.');
}
