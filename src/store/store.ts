import { configureStore } from "@reduxjs/toolkit"

import { calendarReducer } from "./calendar"
import { tasksReducer } from "./tasks"

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export type RootState = ReturnType<typeof store.getState>