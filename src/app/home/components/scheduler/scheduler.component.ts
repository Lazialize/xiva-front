import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import dxForm from 'devextreme/ui/form';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  timeZone: string;
  currentDate: Date;

  schedules: CustomStore;

  constructor(private firestoreService: FirestoreService) {
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.currentDate = new Date();

    this.schedules = new CustomStore({
      key: 'id',
      loadMode: 'raw',
      load: () => {
        return []
      }
    });
  }

  ngOnInit() {}

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
        dataField: 'startAt',
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
        dataField: 'endAt',
        isRequired: true,
      }
    ])
  }
}
