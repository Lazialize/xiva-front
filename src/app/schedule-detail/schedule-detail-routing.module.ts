import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleDetailPage } from './pages/schedule-detail/schedule-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleDetailRoutingModule {}
