import { holidaysActions, holidaysSelectors } from "./holidays"
import { calendarActions, calendarSelectors } from "./calendar"
import { tasksActions, tasksSelectors } from "./tasks"
import { taskLabelsActions, taskLabelsSelectors } from "./task-labels"

export const actions = {
  holiday: holidaysActions,
  calendar: calendarActions,
  tasks: tasksActions,
  taskLabels: taskLabelsActions,
}

export const selectors = {
  holiday: holidaysSelectors,
  calendar: calendarSelectors,
  tasks: tasksSelectors,
  taskLabels: taskLabelsSelectors,
}

export * from "./store"