"use client"
import { InputNumber, InputNumberProps } from 'primereact/inputnumber';

type InputProps = {
  label?: string
  error?: string
  touched?: boolean
}

export const UiInputNumberComponent = ({
  label,
  error,
  touched,
  ...inputNumberProps
}: InputProps & InputNumberProps) => {
  return (
    <div>
      {
        label && (
          <label>{label}</label>
        )
      }
      <InputNumber
        useGrouping={false}
        className={`${touched && error ? "p-invalid" : ""}`}
        {...inputNumberProps}
      />
      {touched && error && <small className="p-error">{error}</small>}
    </div>
  )
}
