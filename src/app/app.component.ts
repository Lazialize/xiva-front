import { Component } from '@angular/core';
import { loadMessages, locale } from 'devextreme/localization';
import jaMessages from 'devextreme/localization/messages/ja.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    loadMessages(jaMessages);
    locale(navigator.language);
  }
}
