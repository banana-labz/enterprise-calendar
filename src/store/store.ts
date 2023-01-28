import { configureStore } from "@reduxjs/toolkit"

import { holidaysReducer } from "./holidays"

export const store = configureStore({
  reducer: {
    holidays: holidaysReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export type RootState = ReturnType<typeof store.getState>