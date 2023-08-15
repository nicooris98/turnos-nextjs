"use client"
import { DaysOfWeek } from "@/app/shared/enums/days.enum";
import { ScheduleModel } from "@/app/shared/models";
import { ScheduleService } from "@/app/shared/services/schedule.service";
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from "react";
import { ShiftFormComponent } from "../shift-form/shift-form.component";

export const ShiftDropdownComponent = () => {
  const scheduleService: ScheduleService = new ScheduleService()

  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [schedules, setSchedules] = useState([] as ScheduleModel[])

  useEffect(() => {
    fetchSchedules()
  }, [])

  const fetchSchedules = async () => {
    const newSchedules = (await scheduleService.fetchSchedules()).map(el => {
      return {
        ...el,
        labelStr: DaysOfWeek[el.dayOfWeek] + " - " + el.timeFrom + " a " + el.timeTo
      }
    })
    setSchedules(newSchedules)
  }

  const handleChange = (e) => {
    setSelectedSchedule(e.value)
  }

  const handleVisible = (value: boolean) => {
    if(!value) setSelectedSchedule(null)
  }

  return (
    <>
      <Dropdown
        value={selectedSchedule}
        onChange={handleChange}
        options={schedules}
        optionLabel="labelStr"
        placeholder="Seleccione un horario"
        className="w-full md:w-14rem"
      />

      {
        selectedSchedule && (
          <ShiftFormComponent setVisible={handleVisible} schedule={selectedSchedule}/>
        )
      }
    </>
  )
}
