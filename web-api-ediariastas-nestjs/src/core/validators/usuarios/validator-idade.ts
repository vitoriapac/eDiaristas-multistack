import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customAge', async: false })
export class IdadeValida implements ValidatorConstraintInterface {
  validate(nascimento: Date): boolean {
    nascimento = new Date(nascimento);

    return this.calcularIdade(nascimento) > 17 &&
      this.calcularIdade(nascimento) < 100
      ? true
      : false;
  }

  defaultMessage(): string {
    return 'Precisa ser maior de idade';
  }

  private calcularIdade(nascimento: Date): number {
    const dataAtual = new Date(Date.now());
    const diferencaDatas = Math.abs(dataAtual.getTime() - nascimento.getTime());
    const diferencaAnos = Math.floor(
      diferencaDatas / (1000 * 60 * 60 * 24 * 365),
    );

    return diferencaAnos;
  }
}
