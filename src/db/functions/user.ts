import { eq } from 'drizzle-orm'
import { db } from '../drizzle'
import { User } from '../schema'

export type CreateUserParams = {
  name: string
}

export const createUser = async ({ name }: CreateUserParams) => {
  const [user] = await db.insert(User).values({ name }).returning()

  return user
}

export type GetUserByIdParams = {
  id: string
}

export const getUserById = async ({ id }: GetUserByIdParams) => {
  const [user] = await db.select().from(User).where(eq(User.id, id))

  return user
}
