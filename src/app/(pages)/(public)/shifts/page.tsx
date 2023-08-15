"use client"
import { ShiftDialogForm, UiCalendarComponent } from "@/app/shared/components"
import { DaysOfWeek } from "@/app/shared/enums/days.enum"
import { ScheduleModel } from "@/app/shared/models"
import { ScheduleService } from "@/app/shared/services/schedule.service"
import moment from "moment"
import { useEffect, useState } from "react"
import { ShiftDropdownComponent } from "./shift-dropdown/shift-dropdown.component"

const Shifts = () => {

  /* const fetchSchedules = async () => {
    const newSchedules: ScheduleModel[] = await scheduleService.fetchSchedules()
    setSchedules(newSchedules)
    const disabledUpdate: number[] = []
    const scheduleDays: number[] = newSchedules.map((schedule: ScheduleModel) => schedule.dayOfWeek)
    allDays.forEach((el: number) => {
      if (!scheduleDays.includes(el)) disabledUpdate.push(el)
    })
    setDisabledDays(disabledUpdate)
  } */

  return (
    <div className="shift-main">
      <ShiftDropdownComponent />
    </div>
  )
}

export default Shifts