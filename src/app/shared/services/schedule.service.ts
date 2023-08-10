export class ScheduleService {
  public async fetchSchedules() {
    let results = []
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedules`)
    .then(async (response: any) => {
      results = await response.json()
    })
    return results
  }
}