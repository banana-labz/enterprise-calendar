import { Moment } from "moment"

import { TaskLabelDTM } from "./task-label"

export interface TaskDTM {
  id: string,
  name: string,
  date: Moment,
  labels: TaskLabelDTM[],
}