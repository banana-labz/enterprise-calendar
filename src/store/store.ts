import { configureStore } from "@reduxjs/toolkit"

import { holidaysReducer } from "./holidays"
import { calendarReducer } from "./calendar"

export const store = configureStore({
  reducer: {
    holidays: holidaysReducer,
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export type RootState = ReturnType<typeof store.getState>