import { LabelDTM, TaskDTM } from "models/dtm"

export interface TasksState {
  labels: LabelDTM[]
  tasks: TaskDTM[]
  search: {
    text: string
    labelIds: string[]
  }
  editModal: {
    isModalOpen: boolean
    selectedTask: string
  }
  addModal: {
    isModalOpen: boolean
    newTask?: TaskDTM
  }
}
