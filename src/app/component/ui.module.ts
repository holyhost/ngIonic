import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FileChooseComponent } from './filechoose/filechoose.component';
import { SizePipe } from '../pipes/filesize.pipe';
import { FileTypePipe } from '../pipes/filetype.pipe';
import { ZzTableComponent } from './zztable/zztable.component';
import { Menu2Component } from './menu2/menu2.component';
import { PpModule } from '../pipes/pp.module';
import { BottomComponent } from './bottom/bottom.component';
import { NoinfoComponent } from './noinfo/noinfo.component';
import { SkeletonComponent } from './skeleton/skeleton.component';




@NgModule({
  declarations: [TitleComponent,
    SizePipe,
    FileTypePipe,
    ZzTableComponent,
    Menu2Component,
    BottomComponent,
    NoinfoComponent,
    SkeletonComponent,
    FileChooseComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PpModule,
  ],
  exports:[
    SizePipe,
    FileTypePipe,
    ZzTableComponent,
    Menu2Component,
    NoinfoComponent,
    SkeletonComponent,
    BottomComponent,
    TitleComponent,FileChooseComponent,CommonModule,IonicModule,FormsModule
  ]
})
export class UiModule { }
