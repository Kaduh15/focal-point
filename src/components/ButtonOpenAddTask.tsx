'use client'

import { openAddTaskModalAction } from '@/actions/openAddTaskModal'
import { Button } from '@/components/ui/Button'

export const ButtonOpenAddTask = () => {
  const openAddTaskModal = async () => {
    await openAddTaskModalAction()
  }

  return <Button onClick={openAddTaskModal}>Adicionar nova tarefa</Button>
}
