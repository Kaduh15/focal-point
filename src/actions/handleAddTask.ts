'use server'

import { addTask } from '@/db/functions/task'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const handleAddTask = createServerAction()
  .input(z.object({ title: z.string(), userId: z.string() }))
  .handler(async ({ input }) => {
    const { title, userId } = input

    const result = await addTask({ title, userId })

    return { id: result.id, title, done: false }
  })
