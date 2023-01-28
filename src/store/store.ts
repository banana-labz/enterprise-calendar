import { configureStore } from "@reduxjs/toolkit"

import { holidaysReducer } from "./holidays"
import { calendarReducer } from "./calendar"
import { tasksReducer } from "./tasks"

export const store = configureStore({
  reducer: {
    holidays: holidaysReducer,
    calendar: calendarReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export type RootState = ReturnType<typeof store.getState>