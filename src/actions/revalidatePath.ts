'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import { createServerAction } from 'zsa'

export const revalidatePathAction = createServerAction()
  .input(z.string())
  .handler(async ({ input }) => {
    console.log('revalidatePathAction input:', input)

    return redirect(input)
  })
