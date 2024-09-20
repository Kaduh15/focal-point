'use client'

import style from './style.module.scss'

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

export function Checkbox({ ...inputProps }: CheckboxProps) {
  return <input {...inputProps} className={style.input} type="checkbox" />
}
