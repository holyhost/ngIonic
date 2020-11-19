import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { EFileChoosePage } from './e-filechoose.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: EFileChoosePage }])
  ],
  declarations: [EFileChoosePage]
})
export class EFileChoosePageModule {}
