import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerPage } from './pages/scheduler/scheduler.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulerPage,
  },
  {
    path: 'schedule-detail/:scheduleId',
    loadChildren: () => import('../schedule-detail/schedule-detail.module').then((m) => m.ScheduleDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulerRoutingModule {}
