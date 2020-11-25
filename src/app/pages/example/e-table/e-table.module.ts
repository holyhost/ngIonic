import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { ETablePage } from './e-table.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: ETablePage }])
  ],
  declarations: [ETablePage]
})
export class ETablePageModule {}
