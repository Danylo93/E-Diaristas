import { Type } from "class-transformer";
import { IsCurrency, IsNotEmpty, IsNumber, Length, Matches, Max, Min } from "class-validator";

export class CreateServiceDto {
  @IsNotEmpty({message: 'Campo NOME não pode ser vazio'})
  @Length(3, 99, {message: 'Campo NOME deve ter entre 3 e 99 caracteres'})
  nome: string;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ','},
  {message: 'Campo VALOR MÍNIMO com formato inválido'}
  )
  @Matches(RegExp('^((?![-]).)*$'), {message: 'VALOR MÍNIMO não pode ser negativo'})
  valorMinimo: number;

  @IsNumber({}, {message: 'campo QUANTIDADE HORAS deve ser um número'})
  @Min(0, {message: 'campo QUANTIDADE HORAS deve ser maior ou igual a zero'})
  @Max(10, {message: 'campo QUANTIDADE HORAS deve ser menor ou igual a dez'})
  @Type(() => Number)
  quantidadeHoras: number;

  @IsNumber({}, {message: 'campo PORCENTAGEM deve ser um número'})
  @Min(0, {message: 'campo PORCENTAGEM deve ser maior ou igual a zero'})
  @Max(100, {message: 'campo PORCENTAGEM deve ser menor ou igual a 100'})
  @Type(() => Number)
  porcentagem: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ','},
  {message: 'Campo VALOR QUARTO com formato inválido'}
  )
  @Matches(RegExp('^((?![-]).)*$'), {message: 'VALOR QUARTO não pode ser negativo'})
  valorQuarto: number;

  @IsNumber({}, {message: 'campo  HORAS QUARTO deve ser um número'})
  @Min(0, {message: 'campo HORAS QUARTO deve ser maior ou igual a zero'})
  @Max(10, {message: 'campo HORAS QUARTO deve ser menor ou igual a dez'})
  @Type(() => Number)
  horasQuarto: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ','},
  {message: 'Campo VALOR SALA com formato inválido'}
  )
  @Matches(RegExp('^((?![-]).)*$'), {message: 'VALOR SALA não pode ser negativo'})
  valorSala: number;

  @IsNumber({}, {message: 'campo  HORAS BANHEIRO deve ser um número'})
  @Min(0, {message: 'campo HORAS SALA deve ser maior ou igual a zero'})
  @Max(10, {message: 'campo HORAS SALA  deve ser maior ou igual a dez'})
  @Type(() => Number)
  horasSala: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ','},
  {message: 'Campo VALOR BANHEIRO com formato inválido'}
  )
  @Matches(RegExp('^((?![-]).)*$'), {message: 'VALOR BANHEIRO não pode ser negativo'})
  valorBanheiro: number;

  @IsNumber({}, {message: 'campo  HORAS BANHEIRO deve ser um número'})
  @Min(0, {message: 'campo HORAS BANHEIRO deve ser menor ou igual a zero'})
  @Max(10, {message: 'campo HORAS BANHEIRO deve ser maior ou igual a dez'})
  @Type(() => Number)
  horasBanheiro: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ','},
  {message: 'Campo VALOR COZINHA com formato inválido'}
  )
  @Matches(RegExp('^((?![-]).)*$'), {message: 'VALOR COZINHA não pode ser negativo'})
  valorCozinha: number;

  @IsNumber({}, {message: 'campo HORAS COZINHA deve ser um número'})
  @Min(0, {message: 'campo HORAS COZINHA deve ser menor ou igual a zero'})
  @Max(10, {message: 'campo HORAS COZINHA deve ser maior ou igual a dez'})
  @Type(() => Number)
  horasCozinha: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ','},
  {message: 'Campo VALOR QUINTAL com formato inválido'}
  )
  @Matches(RegExp('^((?![-]).)*$'), {message: 'VALOR QUINTAL não pode ser negativo'})
  valorQuintal: number;

  @IsNumber({}, {message: 'campo HORAS QUINTAL deve ser um número'})
  @Min(0, {message: 'campo HORAS QUINTAL deve ser menor ou igual a zero'})
  @Max(10, {message: 'campo HORAS QUINTAL deve ser maior ou igual a dez'})
  @Type(() => Number)
  horasQuintal: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ','},
  {message: 'Campo VALOR DE OUTROS com formato inválido'}
  )
  @Matches(RegExp('^((?![-]).)*$'), {message: 'VALOR DE OUTROS não pode ser negativo'})
  valorOutros: number;

  @IsNumber({}, {message: 'campo  HORAS OUTROS deve ser um número'})
  @Min(0, {message: 'campo HORAS OUTROS deve ser menor ou igual a zero'})
  @Max(10, {message: 'campo HORAS OUTROS deve ser maior ou igual a dez'})
  @Type(() => Number)
  horasOutros: number;

  @IsNotEmpty({message: 'ÍCONE não pode ser vazio'})
  icone: string;

  @IsNumber({}, {message: 'campo POSIÇÃO deve ser um número'})
  @Min(1, {message: 'campo POSIÇÃO deve ser maior ou igual a UM'})
  @Type(() => Number)
  posicao: number;
  
}
