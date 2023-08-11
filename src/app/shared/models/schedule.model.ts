import { DaysOfWeek } from "../enums/days.enum"
import { BaseModel } from "./base.model"

export class ScheduleModel extends BaseModel {
    userId: number
    timeFrom: Date
    timeTo: Date
    dayOfWeek: DaysOfWeek
}