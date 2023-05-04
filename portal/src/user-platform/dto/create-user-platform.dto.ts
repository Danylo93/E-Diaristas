import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserPlatformDto {
  @IsNotEmpty({message: 'Campo NOME não pode ser vazio'})
  @Length(3, 255, {message: 'Campo NOME deve ter acima de 3 caracteres'})
  nome: string;

  @IsNotEmpty({message: 'Campo EMAIL não pode ser vazio'})
  @Length(3, 255, {message: 'Campo EMAIL deve ter acima de 3 caracteres'})
  @IsEmail({message: 'Digite um e-mail válido'})
  email: string;

  @IsNotEmpty({message: 'Campo SENHA não pode ser vazio'})
  @Length(8, 20, {message: 'Campo SENHA deve ter acima de 8 caracteres'} )
  password: string;

  @IsNotEmpty({message: 'Campo CONFIRMAÇÃO DE SENHA não pode ser vazio'})
  @Length(8, 20, {message: 'Campo CONFIRMAÇÃO DE SENHA deve ter acima de 8 caracteres'} )
  passwordConfirmation: string;

}
