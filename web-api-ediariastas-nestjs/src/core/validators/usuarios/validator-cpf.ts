import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioRepository } from 'src/api/usuarios/usuarios.repository';

@ValidatorConstraint({ name: 'CpfJaExiste', async: true })
@Injectable()
export class CpfJaExiste implements ValidatorConstraintInterface {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async validate(cpf: string): Promise<boolean> {
    const cpfExiste = await this.usuarioRepository.repository.findOneBy({
      cpf: cpf,
    });

    return !cpfExiste ? true : false;
  }

  defaultMessage(): string {
    return 'CPF já cadastrado';
  }
}
