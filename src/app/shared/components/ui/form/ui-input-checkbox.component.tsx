"use client"
import { Checkbox, CheckboxProps } from 'primereact/checkbox';
import { ChangeEventHandler, useState } from "react";

type checkProps = {
  id: string
  name: string
  label: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const UiInputCheckboxComponent = ({
  id,
  name,
  label,
  onChange,
  ...checkboxProps
}: checkProps & CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: any) => {
    setChecked(e.checked)
    onChange && onChange(e)
  }

  return (
    <div>
      {
        label && (
          <label>{label}</label>
        )
      }
      <Checkbox
        id={id}
        name={name}
        onChange={handleChange}
        checked={checked}
      />
    </div>
  )
}
