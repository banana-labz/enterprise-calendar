import { Moment } from "moment"
import { AxiosError } from "axios"

import { HolidayDTM } from "models/dtm"

export interface CalendarState {
  currentMonth: Moment,
  isLoading: boolean,
  error?: AxiosError,
  holidays: HolidayDTM[],
}