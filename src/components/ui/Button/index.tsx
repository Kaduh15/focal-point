import style from './style.module.scss'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'delete'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = 'primary',
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button className={style[variant]} {...buttonProps}>
      {children}
    </button>
  )
}
