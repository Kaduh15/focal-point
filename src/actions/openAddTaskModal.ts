'use server'

import { redirect } from 'next/navigation'
import { createServerAction } from 'zsa'

export const openAddTaskModalAction = createServerAction().handler(async () => {
  redirect('/?addTask=true')
})
