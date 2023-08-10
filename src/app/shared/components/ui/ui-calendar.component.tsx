"use client"
import { Calendar } from 'primereact/calendar';
import { useEffect, useState } from "react";
import { locale, addLocale } from 'primereact/api';
import { SPANISH_CONFIG } from "@/app/config/calendar-spanish.config";

type CalendarProps = {
  style?: React.CSSProperties,
  onChange: (date: Date) => void
}

export const UiCalendarComponent = ({
  style,
  onChange
}: CalendarProps) => {
  const dateNow: Date = new Date()

  const [date, setDate] = useState(dateNow);

  useEffect(() => {
    onChange(date)
  }, [date])

  addLocale("es", SPANISH_CONFIG)

  locale("es")


  return (
    <Calendar
      value={date}
      onChange={(e) => setDate(e.value)}
      inline
      showWeek
      style={style ?? {}}
      locale="es"
      minDate={dateNow}
    />
  )
}
