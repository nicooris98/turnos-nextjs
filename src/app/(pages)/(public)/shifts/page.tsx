"use client"
import { UiCalendarComponent } from "@/app/shared/components"
import { DaysOfWeek } from "@/app/shared/enums/days.enum"
import { ScheduleModel } from "@/app/shared/models"
import { ScheduleService } from "@/app/shared/services/schedule.service"
import moment from "moment"
import { useEffect, useState } from "react"

const Shifts = () => {

  const scheduleService: ScheduleService = new ScheduleService()

  const [dateShift, setDateShift] = useState(new Date())

  const [schedules, setSchedules] = useState([] as ScheduleModel[])

  const [disabledDays, setDisabledDays] = useState([] as number[])

  const allDays: number[] = Object.values(DaysOfWeek).filter((v) => !isNaN(Number(v))) as number[]

  const handleChangeDate = (newDate: Date) => {
    //console.log(moment(newDate).toDate())
    setDateShift(newDate)
  }

  const fetchSchedules = async () => {
    const newSchedules: ScheduleModel[] = await scheduleService.fetchSchedules()
    setSchedules(newSchedules)
    const disabledUpdate: number[] = []
    const scheduleDays: number[] = newSchedules.map((schedule: ScheduleModel) => schedule.dayOfWeek)
    allDays.forEach((el: number) => {
      if (!scheduleDays.includes(el)) disabledUpdate.push(el)
    })
    setDisabledDays(disabledUpdate)
  }

  useEffect(() => {
    fetchSchedules()
  }, [])

  return (
    <div className="shift-main">
      <div className="shift-title">
        <h2>Turnos</h2>
      </div>
      <div className="shift-calendar">
        <UiCalendarComponent
          disabledDays={disabledDays}
          onChange={handleChangeDate}
          style={{ width: "100%" }}
        />
        {/* <div className="algo">
          Posible Form
        </div> */}
      </div>
    </div>
  )
}

export default Shifts