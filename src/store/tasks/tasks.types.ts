import { TaskLabelDTM, TaskDTM } from "models/dtm"

export interface TasksState {
  labels: TaskLabelDTM[],
  tasks: TaskDTM[],
  search: {
    text: string,
    labelIds: string[],
  },
  editModal: {
    isModalOpen: boolean,
    selectedTask: string,
  },
  addModal: {
    isModalOpen: boolean,
    newTask?: TaskDTM,
  },
}