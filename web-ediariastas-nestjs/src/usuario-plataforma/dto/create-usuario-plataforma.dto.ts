import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUsuarioPlataformaDto {
  @IsNotEmpty({ message: 'Campo nome não pode ser vazio' })
  @Length(3, 255, {
    message: 'Campo nome deve ter entre 3 a 255 caracteres',
  })
  nome: string;

  @IsNotEmpty({ message: 'Campo email não pode ser vazio' })
  @Length(3, 255, {
    message: 'Campo email deve ter entre 3 a 255 caracteres',
  })
  @IsEmail({ message: 'Digite um email valido' })
  email: string;

  @IsNotEmpty({ message: 'Campo senha não pode ser vazio' })
  @Length(8, 20, {
    message: 'Campo senha deve ter entre 8 a 20 caracters',
  })
  password: string;

  @IsNotEmpty({ message: 'Campo senha não pode ser vazio' })
  @Length(8, 20, {
    message: 'Campo senha deve ter entre 8 a 20 caracters',
  })
  passwordConfirmation: string;
}
