import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { ETitlePage } from './e-title.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: ETitlePage }])
  ],
  declarations: [ETitlePage]
})
export class ETitlePageModule {}
