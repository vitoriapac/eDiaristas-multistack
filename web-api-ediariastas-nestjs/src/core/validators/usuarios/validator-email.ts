import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioRepository } from './../../../api/usuarios/usuarios.repository';

@ValidatorConstraint({ name: 'emailJaExite', async: true })
@Injectable()
export class EmailJaExiste implements ValidatorConstraintInterface {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async validate(email: string): Promise<boolean> {
    const existeEmail = await this.usuarioRepository.repository.findOneBy({
      email: email,
    });

    return !existeEmail ? true : false;
  }

  defaultMessage(): string {
    return 'Email já cadastrado';
  }
}
