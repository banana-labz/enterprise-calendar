import { TaskDTM, TaskLabelDTM } from "models/dtm"
import { Moment } from "moment"

export interface TasksState {
  search: {
    text: string,
    labels: TaskLabelDTM[],
  },
  tasks: TaskDTM[],
  editModal: {
    isModalOpen: boolean,
    selectedTask: string,
  },
  addModal: {
    isModalOpen: boolean,
    newTask?: TaskDTM,
  }
  labels: TaskLabelDTM[],
}