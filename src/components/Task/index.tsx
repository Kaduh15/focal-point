import { ButtonOpenDeleteTask } from '../ButtonOpenDeleteTask'
import { CheckboxToggleDoneTask } from '../CheckboxToggleDoneTask'
import style from './style.module.scss'

type TaskProps = {
  id: number
  title: string
  done: boolean
}

export function Task({ done, id, title }: TaskProps) {
  return (
    <div className={style.container} key={id}>
      <CheckboxToggleDoneTask id={id} done={done} />
      <label htmlFor={`${id}`} className={style.title}>
        {title}
      </label>
      <ButtonOpenDeleteTask className={style.deleteIcon} taskId={id} />
    </div>
  )
}
