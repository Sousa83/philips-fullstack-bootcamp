import { Pipe, PipeTransform } from '@angular/core';

// A criação de pipes precisa desse decorator e
// também de ser importado no módulo para utilização
@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, char: string, replaceFor: string) {
    return value.replace(char, replaceFor);
  }
}
