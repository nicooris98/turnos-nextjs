import { ScheduleModel } from "../models"

export class ScheduleService {
  public async fetchSchedules() {
    let results: ScheduleModel[] = []
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedules`)
      .then((res) => res.json())
      .then((data: ScheduleModel[]) => {
        results = data
      })
    return results
  }
}