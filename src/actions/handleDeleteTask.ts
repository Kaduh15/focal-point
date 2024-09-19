'use server'

import { deleteTask } from '@/db/functions/task'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const handleDeleteTaskAction = createServerAction()
  .input(z.object({ id: z.number() }))
  .handler(async ({ input }) => {
    const { id } = input
    const task = await deleteTask({ id })

    return task
  })
