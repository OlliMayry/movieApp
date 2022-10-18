import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoivesPageRoutingModule } from './moives-routing.module';

import { MoivesPage } from './moives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoivesPageRoutingModule
  ],
  declarations: [MoivesPage]
})
export class MoivesPageModule {}
