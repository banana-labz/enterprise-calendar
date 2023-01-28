import { holidaysActions, holidaysSelectors } from "./holidays"

export const actions = {
  holiday: holidaysActions,
}

export const selectors = {
  holiday: holidaysSelectors,
}

export * from "./store"