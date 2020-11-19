import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { ZzIframePage } from './zziframe.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: ZzIframePage }])
  ],
  declarations: [ZzIframePage]
})
export class ZzIframePageModule {}
