import { Injectable } from '@nestjs/common';
import { ConsumoEnergia } from './consumo_energia.model';

@Injectable()
export class ConsumoEnergiaService {
  private registros: ConsumoEnergia[] = [];

  getTodos(): ConsumoEnergia[] {
    return this.registros;
  }

  criar(registro: ConsumoEnergia): string {
    this.registros.push(registro);
    return 'Registro adicionado com sucesso!';
  }
}
