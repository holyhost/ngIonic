import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EchartLinePage } from './e-echart-line.page';
import { UiModule } from 'src/app/component/ui.module';
// import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: EchartLinePage }])
  ],
  declarations: [EchartLinePage]
})
export class EchartLinePageModule {}
