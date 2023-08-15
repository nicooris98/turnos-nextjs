import { UiInputNumberComponent, UiInputTextComponent } from "@/app/shared/components"
import { UiInputTextareaComponent } from "@/app/shared/components/ui/form/ui-input-textarea.component"
import { ScheduleModel, ShiftModel } from "@/app/shared/models"
import { ShiftService } from "@/app/shared/services/shift.service"
import { useFormik } from "formik"
import { Button } from "primereact/button"
import { useEffect } from "react"
import { object, string, number } from "yup"

type ShiftFormProps = {
  schedule: ScheduleModel
}

export const ShiftFormComponent = ({
  schedule
}: ShiftFormProps) => {
  const shiftService = new ShiftService()
  const newSchema = object({
    firstName: string().required("Nombre requerido."),
    lastName: string().required("Apellido requerido."),
    phoneNumber: number().required("Celular requerido."),
    dni: number().required("DNI requerido."),
  })

  const initialValues: ShiftModel = {
    id: 0,
    scheduleId: schedule.id,
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    social: "",//TODO: obra social deberia ser un dropdown
    observation: "",
    dni: 0,
    isCancelled: false,
    date: new Date()
  }

  const handleSubmit = async (values: typeof initialValues) => {
    const newShift = await shiftService.postShift(values)
    console.log(newShift)
  }

  const formik = useFormik({
    validationSchema: newSchema,
    initialValues,
    onSubmit: handleSubmit
  })

  useEffect(() => {
    formik.resetForm()
  }, [schedule])

  return (
    <div className="shift-form-card">
      <form onSubmit={formik.handleSubmit}>
        <UiInputTextComponent
          id="firstName"
          name="firstName"
          className="shift-input-text"
          placeholder="Nombre"
          label="Nombre"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
        />

        <UiInputTextComponent
          id="lastName"
          name="lastName"
          className="shift-input-text"
          placeholder="Apellido"
          label="Apellido"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
        />

        <UiInputNumberComponent
          id="dni"
          name="dni"
          label="Documento"
          className="shift-input-number"
          placeholder="Número de Documento"
          onValueChange={(e) => {
            formik.setFieldValue('dni', e.value);
          }}
          value={formik.values.dni}
          error={formik.errors.dni}
          touched={formik.touched.dni}
        />

        <UiInputNumberComponent
          id="phoneNumber"
          name="phoneNumber"
          label="Telefono"
          className="shift-input-number"
          placeholder="Número de Telefono"
          onValueChange={(e) => {
            formik.setFieldValue('phoneNumber', e.value);
          }}
          value={formik.values.phoneNumber}
          error={formik.errors.phoneNumber}
          touched={formik.touched.phoneNumber}
        />

        <UiInputTextComponent
          id="social"
          name="social"
          label="Obra Social"
          className="shift-input-text"
          placeholder="Obra Social"
          onChange={formik.handleChange}
          value={formik.values.social}
        />

        <UiInputTextareaComponent
          id="observation"
          name="observation"
          placeholder="Observación"
          className="shift-input-textarea"
          value={formik.values.observation}
          onChange={formik.handleChange}
        />

          <Button label="Guardar" type="submit" className="shift-button-save" />
      </form>
    </div>
  )
}
