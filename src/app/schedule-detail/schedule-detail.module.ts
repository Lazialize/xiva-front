import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScheduleDetailPage } from './pages/schedule-detail/schedule-detail.page';
import { ScheduleDetailRoutingModule } from './schedule-detail-routing.module';

@NgModule({
  declarations: [ScheduleDetailPage],
  imports: [CommonModule, IonicModule, ScheduleDetailRoutingModule],
})
export class ScheduleDetailModule {}
