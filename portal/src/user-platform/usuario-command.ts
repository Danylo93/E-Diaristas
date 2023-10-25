import { Injectable } from '@nestjs/common';
import { Command, Option } from 'nestjs-command';
import { UserPlatformService } from './user-platform.service';

@Injectable()
export class UserCommand {
  constructor(private userService: UserPlatformService) {}

  @Command({
    command: 'create: <username>',
    describe: 'criar primeiro usuário',
  })
  async create(
    @Option({
      name: 'username',
      describe: 'nome do usuário',
      type: 'string',
      demandOption: true,
    })
    nome: string,
    @Option({
      name: 'email',
      describe: 'email do usuário',
      type: 'string',
      demandOption: true,
    })
    email: string,
    @Option({
      name: 'password',
      describe: 'senha',
      type: 'string',
      demandOption: true,
    })
    password: string,
    @Option({
      name: 'password_confirmation',
      describe: 'confirmação de senha',
      type: 'string',
      demandOption: true,
    })
    passwordConfirmation: string,
  ) {
    await this.userService.create({
      nome,
      email,
      password,
      passwordConfirmation,
    });
  }
}
