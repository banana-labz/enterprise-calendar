import axios, { AxiosError } from "axios"
import moment from "moment"

import { HolidayDTM } from "models/dtm"

import { GetPublicHolidaysResponse } from "./nager.contracts"

export class NagerService {
  public getHolidays = async (year: number, countryCode = "UA") => {
    const requestURL = `/PublicHolidays/${year}/${countryCode}`

    let holidays: HolidayDTM[] = []
    try {
      const response = await this.nagerAPI.get<GetPublicHolidaysResponse>(requestURL)

      holidays = response.data.map((holiday) => ({
        name: holiday.name,
        localName: holiday.localName,
        date: moment(holiday.date),
      }))
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error
      }
    }

    return holidays
  }

  private nagerAPI = axios.create({
    baseURL: "https://date.nager.at/api/v3",
    timeout: 30000,
  })
}