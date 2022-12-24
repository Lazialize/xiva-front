import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private scheduleService: ScheduleService,
  ) {}

  ngOnInit() {
    this.schedules$ = this.scheduleService.getSchedules();
  }

  navigateToDetail(id: string): void {
    this.router.navigate(['./schedule-detail', id], {
      relativeTo: this.activatedRoute,
    });
  }
}
