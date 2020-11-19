import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'browser',
    loadChildren: () => import('./pages/zziframe/zziframe.module').then(m => m.ZzIframePageModule)
  },
  {
    path: 'storydetail',
    loadChildren: () => import('./pages/storydetail/storydetail.module').then(m => m.StoryDetailPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
