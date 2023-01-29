import moment from "moment"
import { AxiosError } from "axios"

import { store, actions, selectors } from "store"
import { services } from "services"
import { HolidayDTM } from "models/dtm"

export class CalendarController {
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

  public nextMonth = () => {
    const currentMonth = selectors.calendar.getCurrentMonth(store.getState())

    const nextMonth = currentMonth.clone().add(1, "month")
    store.dispatch(actions.calendar.setCurrentMonth(nextMonth))
  }

  public previousMonth = () => {
    const currentMonth = selectors.calendar.getCurrentMonth(store.getState())

    const previousMonth = currentMonth.clone().subtract(1, "month")
    store.dispatch(actions.calendar.setCurrentMonth(previousMonth))
  }

  public resetMonth = () => {
    const currentMonth = moment(Date.now()).startOf("month")
    store.dispatch(actions.calendar.setCurrentMonth(currentMonth))
  }
}