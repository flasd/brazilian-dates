import { isNationalHoliday } from "./getNationalHolidays"
import { isStateHoliday } from "./getStateHolidays"
import isDate from "date-fns/isDate"
import isWeekend from "date-fns/isWeekend"
import format from "date-fns/format"

function isValidDate(date: Date) {
  const isValid = date instanceof Date && isDate(date)

  if (!isValid) {
    console.error(new Error("Invalid date"))
  }

  return isValid
}

export const isBrazilianHoliday = (date: Date, stateCode?: string) => {
  if (!isValidDate(date)) {
    return false
  }

  return isNationalHoliday(date) || isStateHoliday(date, stateCode)
}

export const isBrazilianBusinessDay = (date: Date, stateCode?: string) => {
  if (!isValidDate(date)) {
    return false
  }
  return !(isWeekend(date) || isBrazilianHoliday(date, stateCode))
}

export const formatToBrazilianDate = (date: Date) => {
  if (!isValidDate(date)) {
    return ""
  }

  return format(date, "dd/MM/yyyy")
}

export const parseFromBrazilianDate = (date: string) => {
  const [day, month, year] = date.split("/").map(Number)

  return new Date(year, month - 1, day)
}
