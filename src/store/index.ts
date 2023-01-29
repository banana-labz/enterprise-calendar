import { calendarActions, calendarSelectors } from "./calendar"
import { tasksActions, tasksSelectors } from "./tasks"

export const actions = {
  calendar: calendarActions,
  tasks: tasksActions,
}

export const selectors = {
  calendar: calendarSelectors,
  tasks: tasksSelectors,
}

export * from "./store"