import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { ListViewPage } from './listview.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: ListViewPage }])
  ],
  declarations: [ListViewPage]
})
export class ListViewPageModule {}
