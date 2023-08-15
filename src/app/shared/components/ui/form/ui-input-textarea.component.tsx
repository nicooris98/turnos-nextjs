"use client"
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea"
import { CSSProperties, useState } from "react"
interface FieldProps {
  label?: string
  labelClassName?: string
  labelStyle?: CSSProperties
  fieldClassName?: string
  fieldStyle?: CSSProperties
  error?: string
  touched?: boolean
}

export const UiInputTextareaComponent = ({
  rows,
  label,
  labelClassName,
  labelStyle,
  className,
  fieldClassName,
  fieldStyle,
  error,
  touched,
  value,
  maxLength,
  onChange,
  ...textAreaProps
}: InputTextareaProps & FieldProps) => {
  const [length, setLength] = useState(Number(value?.length || 0))

  const handleChange = (e: any) => {
    setLength(Number(e.target.value.length))
    onChange && onChange(e)
  }

  return (
    <div className={`scuore-field ${fieldClassName ?? ""}`} style={fieldStyle}>
      <h4 className="inputtextarea-title">{label}</h4>

      <div>
        <InputTextarea
          className={`cbo-inputtextarea ${touched && error ? "p-invalid" : ""} ${className ?? ""}`}
          onChange={handleChange}
          value={value}
          maxLength={maxLength}
          autoResize
          {...textAreaProps}
        />
      </div>

      {touched && error && <small className="p-error">{error}</small>}
    </div>
  )
}
