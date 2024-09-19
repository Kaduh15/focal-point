'use server'

import { getAllTasksByUserId } from '@/db/functions/task'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const getAllTasksByUserIdAction = createServerAction()
  .input(z.object({ id: z.string() }))
  .handler(async ({ input }) => {
    const { id } = input
    const result = await getAllTasksByUserId({ userId: id })

    return result
  })
