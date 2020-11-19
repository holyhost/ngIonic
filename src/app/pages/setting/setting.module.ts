import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { SettingPage } from './setting.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: SettingPage }])
  ],
  declarations: [SettingPage]
})
export class SettingPageModule {}
