import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Navigate, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { defaultTheme, GlobalStyle } from "./theme"
import { Header } from "./components"
import { CalendarPage } from "./pages"

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
  <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Navigate to="calendar" />} />
        <Route path="calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)