import { holidaysActions, holidaysSelectors } from "./holidays"
import { calendarActions, calendarSelectors } from "./calendar"
import { tasksActions, tasksSelectors } from "./tasks"

export const actions = {
  holiday: holidaysActions,
  calendar: calendarActions,
  tasks: tasksActions,
}

export const selectors = {
  holiday: holidaysSelectors,
  calendar: calendarSelectors,
  tasks: tasksSelectors,
}

export * from "./store"