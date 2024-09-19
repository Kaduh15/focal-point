import style from './style.module.scss'

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ ...inputProps }: InputProps) {
  return <input className={style.input} {...inputProps} />
}
