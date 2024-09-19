import { getUserById } from '@/db/functions/user'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { createServerAction } from 'zsa'
import { createRouteHandlersForAction } from 'zsa-openapi'

const loginUserAction = createServerAction()
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .handler(async ({ input }) => {
    const { id } = input

    const user = await getUserById({ id })

    if (!user) {
      redirect('/?createUser=1')
    }

    cookies().set('userId', user.id, {
      path: '/',
    })

    redirect('/')
  })

export const { GET } = createRouteHandlersForAction(loginUserAction)
