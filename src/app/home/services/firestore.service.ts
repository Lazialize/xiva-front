import { Injectable } from '@angular/core';

import { Analytics, getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private app: FirebaseApp;
  private analytics: Analytics;

  constructor() {
    this.app = initializeApp(environment.firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }
}
