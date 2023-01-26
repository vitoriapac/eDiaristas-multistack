import { Expose } from 'class-transformer';

export class UsuarioResponseDto {
  id: number;

  @Expose({ name: 'nome_completo' })
  nomeCompleto: string;

  email: string;

  @Expose({ name: 'tipo_usuario' })
  tipoUsuario: number;

  cpf: string;

  reputacao: number;

  nascimento: Date;

  telefone: string;

  @Expose({ name: 'chave_pix' })
  chavePix: string;
}
