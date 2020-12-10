import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { SearchViewPage } from './searchview.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: SearchViewPage }])
  ],
  declarations: [SearchViewPage]
})
export class SearchViewPageModule {}
