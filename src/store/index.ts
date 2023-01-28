import { holidaysActions, holidaysSelectors } from "./holidays"
import { calendarActions, calendarSelectors } from "./calendar"

export const actions = {
  holiday: holidaysActions,
  calendar: calendarActions,
}

export const selectors = {
  holiday: holidaysSelectors,
  calendar: calendarSelectors,
}

export * from "./store"