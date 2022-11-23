import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserPlatformDto } from './dto/create-user-platform.dto';
import { UpdateUserPlatformDto } from './dto/update-user-platform.dto';
import { UserPlatform } from './entities/user-platform.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserPlatformService {
  constructor(
    @InjectRepository(UserPlatform)
    private userRepository: Repository<UserPlatform>,
  ) {}
  async create(createUserPlatformDto: CreateUserPlatformDto) {
    const user = await this.userRepository.findOneBy({
      email: createUserPlatformDto.email,
    });

    if (
      createUserPlatformDto.password !==
      createUserPlatformDto.passwordConfirmation
    ) {
      throw new BadRequestException('Senha dos campos não conferem');
    } else if (!user) {
      createUserPlatformDto.password = await this.setPassword(
        createUserPlatformDto.password,
      );
      return this.userRepository.save(createUserPlatformDto);
    }
    throw new BadRequestException('Email já cadastrado');
  }
  async findAll() {
    return await this.userRepository.find();
  }

 async findOne(id: number) {
  const user = await this.userRepository.findOneBy({id:id});
  if(!user){
    throw new NotFoundException();
  }
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOneBy({email: email});
    if(!user){
      throw new NotFoundException();
    }
      return user;
    }

  async update(id: number, updateUserPlatformDto: UpdateUserPlatformDto) {
    const user = await this.userRepository.findOneBy({ id: id });
    const userEmail = await this.userRepository.findOneBy({email:updateUserPlatformDto.email});

    if(updateUserPlatformDto.password !== updateUserPlatformDto.passwordConfirmation){
      throw new BadRequestException('Senha não confere');
    }else if(!userEmail || userEmail.email === user.email){
      user.nome = updateUserPlatformDto.nome;
      user.email = updateUserPlatformDto.email;
      user.password = await this.setPassword(updateUserPlatformDto.password);
      await this.userRepository.save(user);
      return user;
    }else if (userEmail.email !== user.email){
      throw new BadRequestException('Email já cadastrado');
    }
  }

  async remove(id: number) {
    const result = await this.userRepository.delete(id);

    if(result.affected == 0){
      throw new NotFoundException('Nenhum ID encontrado');
    }
  }

  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
  }
}
