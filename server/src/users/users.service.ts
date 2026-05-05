import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findAllUser() {
    return await this.userRepo.find({
      select: {
        name: true,
        contact: true,
        email: true,
        role: true,
        id: true,
      },
    });
  }

  async findOneUser(id: string) {
    const user = await this.userRepo.findOne({
      where: { id },
      select: {
        name: true,
        contact: true,
        email: true,
        role: true,
        id: true,
      },
    });
    if (!user) {
      throw new NotFoundException(`user with id:${id} not found`);
    }
    return user;
  }

  // get profile of logged in user
  // async profile(id: string) {
  //   const user = await this.userRepo.findOne({
  //     where: { id },
  //     select: {
  //       name: true,
  //       contact: true,
  //       email: true,
  //       role: true,
  //       id: true,
  //     },
  //   });
  //   return user;
  // }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`user with id:${id} not found`);
    }
    await this.userRepo.update(id, updateUserDto);
    return {
      message: 'User updated! ',
      updatedUser: await this.userRepo.findOne({
        where: { id },
      }),
    };
  }

  async remove(id: string) {
    const user = await this.userRepo.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`user with id:${id} not found`);
    }
    await this.userRepo.remove(user);

    return {
      message: `User with id:${id} removed`,
    };
  }
}
