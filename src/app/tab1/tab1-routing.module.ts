import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewPage } from '../pages/listview/listview.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'listview',
    loadChildren: ()=>import('../pages/listview/listview.module').then(m=>m.ListViewPageModule)
  },
  {
    path: 'zztable',
    loadChildren: ()=>import('../pages/example/e-table/e-table.module').then(m=>m.ETablePageModule)
  },
  {
    path: 'title',
    loadChildren: ()=>import('../pages/example/e-title/e-title.module').then(m=>m.ETitlePageModule)
  },
  {
    path: 'menu2',
    loadChildren: ()=>import('../pages/example/e-menu2/e-menu2.module').then(m=>m.EMenu2PageModule)
  },
  {
    path: 'filechoose',
    loadChildren: ()=>import('../pages/example/e-filechoose/e-filechoose.module').then(m=>m.EFileChoosePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
