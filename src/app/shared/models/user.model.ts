import { BaseModel } from "./base.model"

export class UserModel extends BaseModel {
  roleId: number
  firstName: string
  lastName: string
  phoneNumber: string
  speciality: string
}