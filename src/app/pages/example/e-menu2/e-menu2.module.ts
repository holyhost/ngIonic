import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { EMenu2Page } from './e-menu2.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: EMenu2Page }])
  ],
  declarations: [EMenu2Page]
})
export class EMenu2PageModule {}
