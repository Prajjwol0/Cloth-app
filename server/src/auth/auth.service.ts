import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login-auth.dto';
import { RegisterDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUserEmail = await this.userRepo.findOne({
      where: { email: dto.email },
    });
    if (existingUserEmail) {
      throw new ConflictException('Email already exists');
    }
    const salt = Number(process.env.BCRYPT_SALT_ROUNDS) || 7;
    const hashedPw = await bcrypt.hash(dto.password, salt);

    const registeredRole = dto.role.trim().toLowerCase();
    const allowedRoles = ['client', 'shopkeeper'];
    if (!allowedRoles.includes(registeredRole)) {
      throw new ForbiddenException('Roles can be either Client or Shopkeeper');
    }
    const user = this.userRepo.create({
      name: dto.name,
      email: dto.email,
      password: hashedPw,
      role: registeredRole,
    });

    const savedUser = await this.userRepo.save(user);

    return {
      message: 'User registered!!',
      id: savedUser.id,
      email: savedUser.email,
      name: savedUser.name,
      roles: savedUser.role,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.userRepo.findOne({ where: { email: dto.email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // sabai credentials match vayepaxi:->
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    return {
      message: 'User logged in!!',
      accessToken: token,
    };
  }
}
