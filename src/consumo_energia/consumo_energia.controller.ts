import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConsumoEnergiaService } from './consumo_energia.service';
import { ConsumoEnergia } from './consumo_energia.model';

@Controller('consumo_energia')
export class ConsumoEnergiaController {
  constructor(private readonly service: ConsumoEnergiaService) {}

  @Get()
  listar() {
    return this.service.getTodos();
  }

  @Post()
  criar(@Body() body: ConsumoEnergia) {
    return this.service.criar(body);
  }
}
