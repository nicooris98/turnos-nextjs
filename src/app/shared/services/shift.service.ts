import { ShiftModel } from "../models";

export class ShiftService {
  public async postShift(newShift: ShiftModel) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newShift)
    };
    let result: ShiftModel = {} as ShiftModel
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shifts`, requestOptions)
      .then((res) => res.json())
      .then((data: ShiftModel) => {
        result = data
      })
    return result
  }
}