import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/component/ui.module';
import { StoryDetailPage } from './storydetail.page';



@NgModule({
  imports: [
    UiModule,
    RouterModule.forChild([{ path: '', component: StoryDetailPage }])
  ],
  declarations: [StoryDetailPage]
})
export class StoryDetailPageModule {}
