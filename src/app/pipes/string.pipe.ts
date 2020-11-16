import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pstring'
})
export class StringPipe implements PipeTransform {

  transform(value: string,length:number ): string {
    if(value&&value.length>length){
      return value.slice(0,length)+"...";

    }else{
      return value;
    }
  }


}
