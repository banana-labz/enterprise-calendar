import { holidaysActions, holidaysSelectors } from "./holidays"
import { calendarActions, calendarSelectors } from "./calendar"
import { tasksActions } from "./tasks"

export const actions = {
  holiday: holidaysActions,
  calendar: calendarActions,
  tasks: tasksActions,
}

export const selectors = {
  holiday: holidaysSelectors,
  calendar: calendarSelectors,
}

export * from "./store"