interface ScheduleCore {
  id: string;
  title: string;
  description: string;
}

interface IStringTimestamp {
  startTime: string;
  endTime: string;
}

interface ITimestamp {
  startTime: Date;
  endTime: Date;
}

export type ScheduleForFirestore = ScheduleCore & IStringTimestamp; 
export type Schedule = ScheduleCore & ITimestamp;