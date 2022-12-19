import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SchedulerPage } from './pages/scheduler/scheduler.page';
import { SchedulerRoutingModule } from './scheduler-routing.module';



@NgModule({
  declarations: [
    SchedulerPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    SchedulerRoutingModule
  ]
})
export class SchedulerModule { }
