import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import { store } from "store"

import { App } from "view"

const root = document.getElementById("root")!

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
)
