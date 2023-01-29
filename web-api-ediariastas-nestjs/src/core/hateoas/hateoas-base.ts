import { Injectable } from '@nestjs/common';
import { UrlGeneratorService } from 'nestjs-url-generator';
import {
  ControllerClass,
  ControllerMethod,
} from 'nestjs-url-generator/dist/interfaces';
import { HateoasLinks } from './hateoas.interface';

@Injectable()
export abstract class HateoasBase {
  constructor(public urlGeneratorService: UrlGeneratorService) {}

  LINKS: HateoasLinks[] = [];

  abstract gerarLinksHateoas(): HateoasLinks[];

  protected adicionarLinks(
    metodo: string,
    descricao: string,
    controller: ControllerClass,
    controllerMethod: ControllerMethod,
    param?,
  ) {
    this.LINKS.push({
      type: metodo,
      rel: descricao,
      uri: this.urlGeneratorService.generateUrlFromController({
        controller: controller,
        controllerMethod: controllerMethod,
        params: param,
      }),
    });
  }
}
