import { Type } from 'class-transformer';
import {
  IsCurrency,
  IsNotEmpty,
  IsNumber,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateServicoDto {
  @IsNotEmpty({ message: 'Campo nome não pode ser vazio' })
  @Length(3, 99, { message: 'Campo nome deve ter entre 3 e 99 caracteres' })
  nome: string;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínino em formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo valor mínimo não pode ser negativo',
  })
  valorMinimo: number;

  @IsNumber({}, { message: 'Campo quantidade de horas deve ser um número' })
  @Min(0, { message: 'A quantidade de horas deve ser maior ou igual a zero' })
  @Max(10, { message: 'A quantidade de horas deve ser menor ou igual a dez' })
  @Type(() => Number)
  quantidadeHoras: number;

  @IsNumber({}, { message: 'Campo porcentagem deve ser um número' })
  @Min(0, { message: 'A porcentagem deve ser maior ou igual a zero' })
  @Max(100, { message: 'A porcentagem deve ser menor ou igual a cem' })
  @Type(() => Number)
  porcentagem: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor do quarto em formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo valor do quarto não pode ser negativo',
  })
  valorQuarto: number;

  @IsNumber({}, { message: 'Campo horas quarto deve ser um número' })
  @Min(0, { message: 'A hora do quarto deve ser maior ou igual a zero' })
  @Max(10, { message: 'A hora do quarto deve ser menor ou igual a dez' })
  @Type(() => Number)
  horasQuarto: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor da sala em formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo valor da sala não pode ser negativo',
  })
  valorSala: number;

  @IsNumber({}, { message: 'Campo horas sala deve ser um número' })
  @Min(0, { message: 'A hora da sala deve ser maior ou igual a zero' })
  @Max(10, { message: 'A hora da sala deve ser menor ou igual a dez' })
  @Type(() => Number)
  horasSala: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor do banheiro em formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo valor do banheiro não pode ser negativo',
  })
  valorBanheiro: number;

  @IsNumber({}, { message: 'Campo horas banheiro deve ser um número' })
  @Min(0, { message: 'A hora do banheiro deve ser maior ou igual a zero' })
  @Max(10, { message: 'A hora do banheiro deve ser menor ou igual a dez' })
  @Type(() => Number)
  horasBanheiro: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor da cozinha em formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo valor da cozinha não pode ser negativo',
  })
  valorCozinha: number;

  @IsNumber({}, { message: 'Campo horas cozinha deve ser um número' })
  @Min(0, { message: 'A hora da cozinha deve ser maior ou igual a zero' })
  @Max(10, { message: 'A hora da cozinha deve ser menor ou igual a dez' })
  @Type(() => Number)
  horasCozinha: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor do quintal em formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo valor do quintal não pode ser negativo',
  })
  valorQuintal: number;

  @IsNumber({}, { message: 'Campo horas quintal deve ser um número' })
  @Min(0, { message: 'A hora do quintal deve ser maior ou igual a zero' })
  @Max(10, { message: 'A hora do quintal deve ser menor ou igual a dez' })
  @Type(() => Number)
  horasQuintal: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor de outros cômodos em formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo valor de outros cômodos não pode ser negativo',
  })
  valorOutros: number;

  @IsNumber({}, { message: 'Campo horas outros deve ser um número' })
  @Min(0, { message: 'A hora de outros deve ser maior ou igual a zero' })
  @Max(10, { message: 'A hora de outros deve ser menor ou igual a dez' })
  @Type(() => Number)
  horasOutros: number;

  @IsNotEmpty({ message: 'Ícone não pode ser vazio' })
  icone: string;

  @IsNumber({}, { message: 'Campo posição deve ser um número' })
  @Min(1, { message: 'A posição deve ser maior ou igual a zero' })
  @Type(() => Number)
  posicao: number;
}
