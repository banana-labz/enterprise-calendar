import { CalendarController } from "./calendar"
import { TasksController } from "./tasks"

export const controllers = {
  calendar: new CalendarController(),
  tasks: new TasksController(),
}