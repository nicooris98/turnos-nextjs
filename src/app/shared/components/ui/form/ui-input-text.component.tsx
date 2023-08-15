"use client"
import { InputText, InputTextProps } from "primereact/inputtext"
import React from 'react'

type InputProps = {
  label?: string
  error?: string
  touched?: boolean
}

export const UiInputTextComponent = ({
  label,
  error,
  touched,
  ...inputTextProps
}: InputProps & InputTextProps) => {
  return (
    <div>
      {
        label && (
          <label>{label}</label>
        )
      }
      <InputText
        className={`${touched && error ? "p-invalid" : ""}`}
        {...inputTextProps}
      />
      {touched && error && <small className="p-error">{error}</small>}
    </div>
  )
}
