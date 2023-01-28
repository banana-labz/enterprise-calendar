import { AxiosError } from "axios"

import { store, actions, selectors } from "store"

import { services } from "services"

import { HolidayDTM } from "models/dtm"

export class HolidaysController {
  public loadHolidays = async (year: number, countryCode?: string) => {
    store.dispatch(actions.holiday.setLoading(true))

    let holidays: HolidayDTM[] = []
    try {
      holidays = await services.nager.getHolidays(year, countryCode)
    } catch (error) {
      if (error instanceof AxiosError) {
        store.dispatch(actions.holiday.setError(error))
        store.dispatch(actions.holiday.setLoading(false))
        return
      }

      console.error(error)
    }

    store.dispatch(actions.holiday.setHolidays(holidays))
    store.dispatch(actions.holiday.setLoading(false))
  }

}