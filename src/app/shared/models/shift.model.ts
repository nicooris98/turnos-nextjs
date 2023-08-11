import { BaseModel } from "./base.model"

export class ShiftModel extends BaseModel {
  scheduleId: number
  firstName: string
  lastName: string
  phoneNumber: string
  social: string
  observation: string
  dni: string
  isCancelled: boolean
  date: Date
}