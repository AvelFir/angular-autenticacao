import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let tipo: string = '';
  
    switch(value) {
      case 'INICIO_TRABALHO':
        return 'Início Trabalho'
      case 'INICIO_ALMOCO':
        return 'Início Almoço'
      case 'TERMINO_ALMOCO':
        return 'Término Almoço'
      case 'TERMINO_TRABALHO':
        return 'Término Trabalho'
      case 'INICIO_PAUSA':
        return 'Início Pausa'
      case 'TERMINO_PAUSA':
        return 'Término Pausa'
    }
    return value;
  }

}
