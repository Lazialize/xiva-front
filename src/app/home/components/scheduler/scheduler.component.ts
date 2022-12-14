import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import dxForm from 'devextreme/ui/form';
import { firstValueFrom, tap } from 'rxjs';
import { Schedule } from '../../interfaces/scheduler';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  timeZone: string;
  currentDate: Date | string | number;
  schedules: CustomStore;

  constructor(private firestoreService: FirestoreService) {
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.currentDate = new Date();

    this.schedules = new CustomStore<Schedule, string>({
      key: 'id',
      load: () => {
        return  firstValueFrom(this.firestoreService.getSchedules().pipe(
          tap(a => console.log(a))
        ))
      },
      insert: async (value: Schedule) => {
        return firstValueFrom(await this.firestoreService.addSchedule(value));
      },
      remove: async (key: string) => {
        this.firestoreService.deleteSchedule(key)
      },
      update: async (key: string, value: Schedule) => {
        return await this.firestoreService.updateSchedule(key, value)
      }
    });
  }

  ngOnInit(): void {
    
  }

  onFormOpening(data: any) {
    const form: dxForm = data.form;

    form.option('items', [
      {
        label: {
          text: 'タイトル'
        },
        editorType: 'dxTextBox',
        editorOptions: {
          width: '100%',
        },
        dataField: 'title',
        colSpan: 2,
        isRequired: true,
      },
      {
        label: {
          text: '説明'
        },
        editorType: 'dxTextArea',
        editorOptions: {
          height: 160
        },
        dataField: 'description',
        colSpan: 2
      },
      {
        label: {
          text: '開始時刻',
        },
        editorType: 'dxDateBox',
        editorOptions: {
          type: 'datetime',
        },
        dataField: 'startDate',
        isRequired: true,
      },
      {
        label: {
          text: '終了時刻',
        },
        editorType: 'dxDateBox',
        editorOptions: {
          type: 'datetime',
        },
        dataField: 'endDate',
        isRequired: true,
      }
    ]);
  }

  reloadSource() {
    this.schedules.clearRawDataCache();
    this.schedules.load();
  }

  log(a: any) {
    console.log(a)
  }
}
