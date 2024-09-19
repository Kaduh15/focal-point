'use client'

import style from './style.module.scss'

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

export function Checkbox({ ...inputProps }: CheckboxProps) {
  return (
    <div className={style.container}>
      <input {...inputProps} type="checkbox" />
    </div>
  )
}
