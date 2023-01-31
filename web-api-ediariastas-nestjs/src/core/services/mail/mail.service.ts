import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { UsuarioApi } from 'src/api/usuarios/entities/usuario.entity';
import TipoUsuario from 'src/api/usuarios/enum/tipo-usuario.enum';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async enviarEmailDeConfirmacao(usuario: UsuarioApi) {
    let tipoUsuario = false;

    if (usuario.tipoUsuario == TipoUsuario.CLIENTE) {
      tipoUsuario = true;
    }

    await this.mailerService.sendMail({
      to: usuario.email,
      from: '"E-diaristas" <suporte@ediaristas.com.br>',
      subject: 'Bem-vindo(a) ao E-diaristas',
      template: 'confirmation',
      context: {
        nome: usuario.nomeCompleto,
        tipoUsuario: tipoUsuario,
      },
    });
  }
}
