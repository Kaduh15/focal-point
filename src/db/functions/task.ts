import { and, eq, gte, lte } from 'drizzle-orm'
import { db } from '../drizzle'
import { Task, User } from '../schema'
import dayjs from 'dayjs'

export type CreateTaskParams = {
  title: string
  userId: string
}

export const createTask = async ({ title, userId }: CreateTaskParams) => {
  const [task] = await db.insert(Task).values({ title, userId }).returning()

  return task
}

export type GetAllTasksByUserIdParams = {
  userId: string
}

export const getAllTasksByUserId = async ({
  userId,
}: GetAllTasksByUserIdParams) => {
  const [user] = await db.select().from(User).where(eq(User.id, userId))

  if (!user) {
    return []
  }

  const startOfDay = dayjs().startOf('day').toDate()
  const endOfDay = dayjs().endOf('day').toDate()
  const tasks = await db
    .select()
    .from(Task)
    .where(
      and(
        eq(Task.userId, userId),
        gte(Task.createdAt, startOfDay),
        lte(Task.createdAt, endOfDay),
      ),
    )

  return tasks
}

export type AddTaskParams = {
  title: string
  userId: string
}

export const addTask = async ({ title, userId }: AddTaskParams) => {
  const [task] = await db.insert(Task).values({ title, userId }).returning()

  return task
}

export type DeleteTaskParams = {
  id: number
}

export const deleteTask = async ({ id }: DeleteTaskParams) => {
  await db.delete(Task).where(eq(Task.id, id))
}

export type TaskToggleDoneParams = {
  id: number
}

export const taskToggleDone = async ({ id }: TaskToggleDoneParams) => {
  const [task] = await db.select().from(Task).where(eq(Task.id, id))

  if (!task) {
    throw new Error('Task not found')
  }

  await db
    .update(Task)
    .set({
      done: !task.done,
    })
    .where(eq(Task.id, id))
}
