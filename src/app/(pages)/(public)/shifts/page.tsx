"use client"
import { UiCalendarComponent } from "@/app/shared/components"
import { ScheduleService } from "@/app/shared/services/schedule.service"
import { useEffect, useState } from "react"

const Shifts = () => {

  const scheduleService: ScheduleService = new ScheduleService()

  const [dateShift, setDateShift] = useState(null)

  const [schedules, setSchedules] = useState([])

  const handleChangeDate = (newDate: Date) => {
    setDateShift(newDate)
  }

  useEffect(() => {
    const fetchSchedules = async () => {
      const newSchedules = await scheduleService.fetchSchedules()
      setSchedules(newSchedules)
    }
    fetchSchedules()
  }, [dateShift])

  return (
    <div className="shift-main">
      <div className="shift-title">
        <h2>Turnos</h2>
      </div>
      <div className="shift-calendar">
        <UiCalendarComponent onChange={handleChangeDate} style={{ width: "50%" }} />
        <div className="algo">
          Posible Form
          {dateShift && <h1>{JSON.stringify(dateShift)}</h1>}
          {
            schedules.map((el, index) => (
              <div key={index}>{
                JSON.stringify(el)
              }</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shifts