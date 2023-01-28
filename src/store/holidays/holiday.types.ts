import { AxiosError } from "axios"

import { HolidayDTM } from "models/dtm"

export interface HolidaysState {
  isLoading: boolean,
  error?: AxiosError,
  holidays: HolidayDTM[],
}