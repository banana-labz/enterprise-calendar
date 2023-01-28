import moment, { Moment } from "moment"
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

  public addTask = (day: Moment) => {
    store.dispatch(actions.tasks.addTask(day))

    const tasks = selectors.tasks.getAllTasks(store.getState())
    store.dispatch(actions.tasks.openEditModal(tasks.length - 1))
  }

  public closeModalFailure = () => {
    const tasks = selectors.tasks.getAllTasks(store.getState())
    store.dispatch(actions.tasks.removeTask(tasks.length - 1))
    store.dispatch(actions.tasks.closeModal())
  }

  public closeModalSuccess = () => {
    store.dispatch(actions.tasks.closeModal())
  }
}