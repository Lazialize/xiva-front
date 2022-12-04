export interface ScheduleCore {
  id: string;
  title: string;
  description: string;
}

interface IDate {
  startDate: Date;
  endDate: Date
}

interface ITimestamp {
  startDate: string;
  endDate: string;
}

export interface RawSchedule extends ScheduleCore, ITimestamp {}
export interface Schedule extends ScheduleCore, IDate {}
