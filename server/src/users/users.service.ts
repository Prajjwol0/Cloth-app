import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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

    const existingEmail = await this.userRepo.findOne({
      where : { email: createUserDto.email}
    })
    if(existingEmail){
      console.log(' Email already exists!! ');
      throw new ConflictException(" Email already exists!! ")
    }

    const existingNum = await this.userRepo.findOne({
      where: { contact: createUserDto.contact }
    })

        if (existingNum) {
          console.log(' Contact already exists!! ');
          throw new ConflictException(' Contact already exists!! ');
        }

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
    const user = await this.userRepo.findOne({
      where: { id },
    });
    if(!user){
            throw new NotFoundException(`user with id:${id} not found`);

    }
    return user
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({
      where : {id},
    });
    if(!user){
             throw new NotFoundException(`user with id:${id} not found`);

    }
    await this.userRepo.update(id, updateUserDto)
    // const updatedUser = await this.userRepo.findOne({
    //   where : {id},
    // })

    return {
      message: 'User updated! ',
      updatedUser:await this.userRepo.findOne({
        where : {id}
      })
    };
    
  }

  async remove(id: string) {
   const user = await this.userRepo.findOne({
      where: {id}
    })
    if(!user){
      throw new NotFoundException(`user with id:${id} not found`)
    }
    await this.userRepo.remove(user)

    return {
      message: `User with id:${id} removed`
    }
  }
}
