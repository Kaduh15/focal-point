'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const openDeleteTaskModalAction = createServerAction()
  .input(z.number())
  .handler(async ({ input }) => {
    redirect(`/?deleteTask=${input}`)
  })
