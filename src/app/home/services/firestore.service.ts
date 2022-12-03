import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Schedule } from '../interfaces/scheduler';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  collection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.collection = collection(firestore, 'schdules');
  }

  getSchedules() : Observable<Schedule[]>{
    const todayDate = new Date()
    return collectionData(this.collection) as Observable<Schedule[]>
  }
}
