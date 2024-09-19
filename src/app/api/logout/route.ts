import { cookies } from 'next/headers'
import { createServerAction } from 'zsa'
import { createRouteHandlersForAction } from 'zsa-openapi'

const logoutUserAction = createServerAction().handler(async () => {
  cookies().delete('userId')
})

export const { GET } = createRouteHandlersForAction(logoutUserAction)
