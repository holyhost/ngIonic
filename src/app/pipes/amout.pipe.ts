import { Pipe, PipeTransform } from '@angular/core';


/**
 * 数字每隔三位添加逗号
 */
@Pipe({
  name: 'pamount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number): string {
    let result = [], counter = 0;
    let num = (value || 0).toString().split('');
    for (let i = num.length - 1; i >= 0; i--) {
      counter++;
      result.unshift(num[i]);
      if (!(counter % 3) && i != 0) { result.unshift(','); }
    }
    return result.join('');
  }


}
