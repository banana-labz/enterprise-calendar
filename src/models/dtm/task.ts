import { Moment } from "moment"

export interface TaskDTM {
  id: string
  name: string
  date: Moment
  labelIds: string[]
}
