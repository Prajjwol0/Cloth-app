import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepo : Repository<User>
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto)
    return this.userRepo.save(user);
  }

  async findAllUser() {
    return await this.userRepo.find({
      select: {
        name: true,
        contact: true,
        email: true,
        role:true,
        id:true,
      }
    })
  }

  async findOneUser(id: string) {
    return await this.userRepo.findOne({
      where: { id },
    });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({
      where : {id},
    });
    if(!user){
       throw new NotFoundException('User not found');
    }
    await this.userRepo.update(id, updateUserDto)

    // return await this.
  }

  async remove(id: string) {
   const user = await this.userRepo.findOne({
      where: {id}
    })
    if(!user){
      throw new NotFoundException("User not found")
    }
    await this.userRepo.remove(user)

    return {
      message: "User removed!!"
    };
  }
}
