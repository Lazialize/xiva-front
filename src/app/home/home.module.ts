import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { DxSchedulerModule } from 'devextreme-angular';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DxSchedulerModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SchedulerComponent]
})
export class HomePageModule {}
