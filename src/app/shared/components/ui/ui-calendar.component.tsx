"use client"
import { Calendar } from 'primereact/calendar';
import { useEffect, useState } from "react";
import { locale, addLocale } from 'primereact/api';
import { SPANISH_CONFIG } from "@/app/config";
import moment from "moment";

type CalendarProps = {
  style?: React.CSSProperties,
  disabledDays?: number[],
  onChange: (date: Date) => void
}

export const UiCalendarComponent = ({
  style,
  disabledDays,
  onChange
}: CalendarProps) => {
  const dateNow: Date = moment().toDate()

  const [date, setDate] = useState(dateNow);

  useEffect(() => {
    onChange(moment(dateNow).toDate())
  }, [date])

  addLocale("es", SPANISH_CONFIG)

  locale("es")

  return (
    <Calendar
      value={date}
      onChange={(e) => setDate(e.value as Date)}
      inline
      showWeek
      style={style ?? {}}
      locale="es"
      minDate={dateNow}
      disabledDays={disabledDays}
    />
  )
}
