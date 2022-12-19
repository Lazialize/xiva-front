import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../../interfaces/schedule.interface';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.page.html',
  styleUrls: ['./scheduler.page.scss'],
})
export class SchedulerPage implements OnInit {

  schedules$: Observable<Schedule[]>;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.schedules$ = this.scheduleService.getSchedules();
  }
}
