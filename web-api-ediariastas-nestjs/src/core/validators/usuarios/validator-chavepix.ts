import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioRepository } from './../../../api/usuarios/usuarios.repository';

@ValidatorConstraint({ name: 'chavePixJaExite', async: true })
@Injectable()
export class ChavePixExiste implements ValidatorConstraintInterface {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async validate(chavePix: string): Promise<boolean> {
    if (chavePix === '' || null) {
      return true;
    }

    const existePix = await this.usuarioRepository.repository.findOneBy({
      chavePix: chavePix,
    });

    return !existePix ? true : false;
  }

  defaultMessage(): string {
    return 'Chave Pix já cadastrada';
  }
}
