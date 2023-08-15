"use client"
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { ReactNode } from "react";

type GenericFormProps = {
  children: ReactNode,
  formikValues: {},
  setVisible: (newValue: boolean) => void
}

export const UiGenericFormComponent = ({
  children,
  formikValues,
  setVisible
}: GenericFormProps) => {

  const formik = useFormik({
    initialValues: formikValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const cancelForm = () => {
    setVisible(false)
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      {JSON.stringify(formik.values)}
      {children}
      <div className="alerts-dialog-footer">
        <div>
          <Button label="Cancelar" type="button" onClick={cancelForm} />
          <Button label="Reservar" type="submit" onClick={() => formik.handleSubmit} autoFocus />
        </div>
      </div>
    </form>
  )
}
