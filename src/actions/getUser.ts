'use server'

import { getUserById } from '@/db/functions/user'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const getUserByIdAction = createServerAction()
  .input(z.object({ id: z.string() }))
  .handler(async ({ input }) => {
    const { id } = input
    const result = await getUserById({ id })

    if (!result) {
      cookies().delete('userId')

      redirect('/')
    }

    return result
  })
