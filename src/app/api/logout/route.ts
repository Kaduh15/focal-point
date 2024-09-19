import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerAction } from 'zsa'
import { createRouteHandlersForAction } from 'zsa-openapi'

const logoutUserAction = createServerAction().handler(async () => {
  cookies().delete('userId')

  redirect('/')
})

export const { GET } = createRouteHandlersForAction(logoutUserAction)
