import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerPage } from './pages/scheduler/scheduler.page';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD:src/app/home/home-routing.module.ts
    component: HomePage,
  }
=======
    component: SchedulerPage
  },
>>>>>>> 21adc6e (feat: スケジューラーの置き換え):src/app/scheduler/scheduler-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerRoutingModule {}
