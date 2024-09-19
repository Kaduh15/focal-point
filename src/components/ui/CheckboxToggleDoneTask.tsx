'use client'

import { handleToggleDoneTaskAction } from '@/actions/handleToggleDoneTask'
import { revalidatePathAction } from '@/actions/revalidatePath'
import { useServerAction } from 'zsa-react'
import { Checkbox } from './Checkbox'

type CheckboxToggleDoneTaskProps = {
  id: number
  done: boolean
}

export function CheckboxToggleDoneTask({
  id,
  done,
}: CheckboxToggleDoneTaskProps) {
  const { execute: handleToggleDoneTask, isPending } = useServerAction(
    handleToggleDoneTaskAction,
    {
      onSuccess: async () => {
        await revalidatePathAction('/')
      },
      onError: () => {
        console.log('handleToggleDoneTaskAction error')
      },
    },
  )

  return (
    <Checkbox
      checked={done}
      id={`${id}`}
      name={`${id}`}
      disabled={isPending}
      onChange={async () => await handleToggleDoneTask({ id })}
    />
  )
}
