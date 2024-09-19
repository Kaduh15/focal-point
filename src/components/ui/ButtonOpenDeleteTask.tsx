'use client'

import { openDeleteTaskModalAction } from '@/actions/openDeleteTask'
import { Trash } from 'lucide-react'

type ButtonOpenDeleteTaskProps = {
  className?: string
  taskId: number
} & React.SVGAttributes<SVGSVGElement>

export const ButtonOpenDeleteTask = ({
  taskId,
  ...TrashProps
}: ButtonOpenDeleteTaskProps) => {
  const openDeleteTaskModal = async () => {
    await openDeleteTaskModalAction(taskId)
  }

  return (
    <Trash {...TrashProps} onClick={openDeleteTaskModal}>
      Deletar tarefa
    </Trash>
  )
}
