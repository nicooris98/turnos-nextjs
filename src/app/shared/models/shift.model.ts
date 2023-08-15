import { BaseModel } from "./base.model"

export class ShiftModel extends BaseModel {
  scheduleId: number
  firstName: string
  lastName: string
  phoneNumber: number
  social: string
  observation: string
  dni: number
  isCancelled: boolean
  date: Date
}