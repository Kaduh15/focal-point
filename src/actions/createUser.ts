'use server'

import { createUser } from '@/db/functions/user'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const createUserAction = createServerAction()
  .input(z.object({ name: z.string().min(3, 'Nome tem que ter 3 caracteres') }))
  .handler(async ({ input }) => {
    const { name } = input
    const result = await createUser({ name })
    return { id: result.id, name }
  })
