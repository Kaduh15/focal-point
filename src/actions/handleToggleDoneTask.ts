'use server'

import { taskToggleDone } from '@/db/functions/task'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const handleToggleDoneTaskAction = createServerAction()
  .input(z.object({ id: z.number() }))
  .handler(async ({ input }) => {
    const { id } = input
    const result = await taskToggleDone({ id })

    return result
  })
