import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoivesPage } from './moives.page';

const routes: Routes = [
  {
    path: '',
    component: MoivesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoivesPageRoutingModule {}
