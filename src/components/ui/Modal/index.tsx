import style from './style.module.scss'

type ModalProps = {
  children: React.ReactNode
}

export function Modal({ children }: ModalProps) {
  return <div className={style.modal}>{children}</div>
}
