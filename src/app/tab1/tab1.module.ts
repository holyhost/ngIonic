import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { UiModule } from '../component/ui.module';

@NgModule({
  imports: [
    UiModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
