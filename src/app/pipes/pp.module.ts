import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringPipe } from './string.pipe';
import { HourPipe } from './hour.pipe';
import { AmountPipe } from './amout.pipe';



@NgModule({
  declarations: [StringPipe,HourPipe,AmountPipe],
  imports: [
    CommonModule
  ],
  exports:[
    StringPipe,
    AmountPipe,
    HourPipe
  ]
})
export class PpModule { }
