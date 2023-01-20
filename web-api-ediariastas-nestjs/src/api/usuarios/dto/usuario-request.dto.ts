import { IsDateString, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class UsuarioRequestDto {
  id: number;

  @Length(3, 255, {
    message: 'Nome completo deve possuir entre 3 e 255 caracteres',
  })
  nomeCompleto: string;

  @Length(3, 255, {
    message: 'Email deve possuir entre 3 e 255 caracteres',
  })
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  passwordConfirmation: string;

  @IsNotEmpty()
  tipoUsuario: number;

  @Length(11, 11, { message: 'CPF deve possuir 11 caracteres' })
  cpf: string;

  @IsOptional()
  reputacao: string;

  @IsDateString('', { message: 'Data de nascimento deve ser uma data valida' })
  nascimento: Date;

  @Length(11, 11, { message: 'Telefone deve possuir 11 caracteres' })
  telefone: string;

  @IsOptional()
  chavePix: string;
  // fotoDocumento: Foto;
  // fotoUsuarios: Foto;
  // endereco: EnderecoDiarista;
}
