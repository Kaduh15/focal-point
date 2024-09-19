import { createId } from '@paralleldrive/cuid2'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const User = sqliteTable('users', {
  id: text('id').primaryKey().$defaultFn(createId),
  name: text('name').notNull(),
})

export const Task = sqliteTable('tasks', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  done: integer('done', { mode: 'boolean' })
    .notNull()
    .$default(() => false),
  userId: text('user_id')
    .notNull()
    .references(() => User.id),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .notNull()
    .$defaultFn(() => new Date()),
})
