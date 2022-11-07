import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  timeZone: string;
  currentDate: Date;

  constructor() {
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.currentDate = new Date();
  }

  ngOnInit() {}

}
