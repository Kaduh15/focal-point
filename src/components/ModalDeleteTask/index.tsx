'use client'

import { handleDeleteTaskAction } from '@/actions/handleDeleteTask'
import { useRouter } from 'next/navigation'
import { useServerAction } from 'zsa-react'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'
import style from './style.module.scss'

type ModalDeleteTaskProps = {
  id: number
}

export function ModalDeleteTask({ id }: ModalDeleteTaskProps) {
  const route = useRouter()

  const { execute: deleteTask, isPending: deletePending } = useServerAction(
    handleDeleteTaskAction,
    {
      onSuccess: () => {
        route.back()
      },
    },
  )

  return (
    <Modal>
      <h2>Deletar</h2>
      <p>Tem certeza que você deseja deletar essa tarefa?</p>
      <div className={style.buttons}>
        <Button
          disabled={deletePending}
          onClick={async () => await deleteTask({ id })}
          variant="delete"
        >
          Deletar
        </Button>
        <Button
          disabled={deletePending}
          onClick={route.back}
          variant="secondary"
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  )
}
