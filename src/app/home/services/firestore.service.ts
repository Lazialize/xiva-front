import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, docData, DocumentReference, Firestore, updateDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { RawSchedule, Schedule } from '../interfaces/scheduler';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  collection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.collection = collection(firestore, 'schedules');
  }

  getSchedules() : Observable<Schedule[]>{
    return collectionData(this.collection, { idField: 'id' }).pipe(
      map((schedules: RawSchedule[])  => {
        return schedules.map((schedule) => {
          const { startDate, endDate, ...others } = schedule;
          return {
            ...others,
            startDate: new Date(startDate),
            endDate: new Date(endDate)
          }
        });
      })
    ) as Observable<Schedule[]>
  }

  async addSchedule(schedule: Schedule): Promise<Observable<Schedule>> {
    return docData(await addDoc(this.collection, this.convertScheduleToRawData(schedule))) as Observable<Schedule>;
  }

  async deleteSchedule(key: string) {
    const scheduleRef = this.getScheduleDocRef(key);
    await deleteDoc(scheduleRef);
  }

  async updateSchedule(key: string, value: Schedule) {
    const scheduleRef = this.getScheduleDocRef(key);
    return updateDoc(scheduleRef, this.convertScheduleToRawData(value));
  }

  private getScheduleDocRef(key: string): DocumentReference<Schedule> {
    return doc(this.firestore, `schedules/${key}`) as DocumentReference<Schedule>;
  }

  private convertScheduleToRawData(schedule: Schedule): RawSchedule {
    const { startDate, endDate, ...others } = schedule;

    return {
      ...others,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    }
  }
}
