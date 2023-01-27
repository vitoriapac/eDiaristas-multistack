import { BadRequestException } from '@nestjs/common';

export class ValidatorPasswordConfirmation {
  validarConfirmacaoSenha(senha: string, confirmacaoSenha: string) {
    if (senha !== confirmacaoSenha) {
      throw new BadRequestException('Senha não confere');
    }
  }
}
