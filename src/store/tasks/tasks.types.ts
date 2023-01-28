import { TaskDTM, TaskLabelDTM } from "models/dtm"

export interface TasksState {
  search: {
    text: string,
    labels: TaskLabelDTM[],
  },
  tasks: TaskDTM[],
}