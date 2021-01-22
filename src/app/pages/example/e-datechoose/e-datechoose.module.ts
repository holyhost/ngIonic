import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { EDateChoosePage } from './e-datechoose.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: EDateChoosePage }])
  ],
  declarations: [EDateChoosePage]
})
export class EDateChoosePageModule {}
