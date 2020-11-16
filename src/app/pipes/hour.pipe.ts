import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phour'
})
export class HourPipe implements PipeTransform {

  transform(value: number ): any {
    //value是毫秒
    if(value){
      let hour = Math.floor(value/1000/60/60) 
      //总的分钟 - 小时所占的分钟
      let minu = Math.floor(value/1000/60) - hour*60;
      return hour+":"+minu;
    }else{
      return value
    }
  }


}
