import Link from 'next/link'
import style from './style.module.scss'

type IsLink =
  | {
      isLink: boolean
      href: string
    }
  | {
      isLink?: boolean
      href?: never
    }

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'delete'
} & IsLink &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = 'primary',
  children,
  isLink = false,
  href,
  ...buttonProps
}: ButtonProps) {
  if (isLink && href) {
    return (
      <Link className={style[variant]} href={href}>
        {children}
      </Link>
    )
  }

  return (
    <button className={style[variant]} {...buttonProps}>
      {children}
    </button>
  )
}
