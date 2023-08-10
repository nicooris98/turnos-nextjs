"use client"
import { UiCalendarComponent } from "@/app/shared/components"
import { useState } from "react"

const Shifts = () => {

  const [dateShift, setDateShift] = useState(null)

  const handleChangeDate = (newDate: Date) => {
    setDateShift(newDate)
  }

  return (
    <div className="shift-main">
      <div className="shift-title">
        <h2>Turnos</h2>
      </div>
      <div className="shift-calendar">
        <UiCalendarComponent onChange={handleChangeDate} style={{width: "50%"}}/>
        <div className="algo">
          Posible Form
          {dateShift && <h1>{JSON.stringify(dateShift)}</h1>}
        </div>
      </div>
    </div>
  )
}

export default Shifts