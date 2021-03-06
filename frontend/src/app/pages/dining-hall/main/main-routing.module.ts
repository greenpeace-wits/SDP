import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
    {
      path: 'meals',
      loadChildren: () => import('../meals/meals.module').then( 
        m => m.MealsPageModule)
    },
    {
      path: 'message',
      loadChildren: () => import('../../message/message.module').then( 
        m => m.MessagePageModule)
    }
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
