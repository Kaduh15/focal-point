import { eq } from 'drizzle-orm'
import { db } from './drizzle'
import { Task, User } from './schema'

async function seed() {
  const [user] = await db.select().from(User).where(eq(User.id, '1'))

  if (user) {
    console.log('Users already seeded!')
    return
  }

  const [{ id: userId }] = await db
    .insert(User)
    .values([{ id: '1', name: 'Marcus' }])
    .returning({
      id: User.id,
    })

  await db.insert(Task).values([
    { title: 'Lavar o Carro', userId },
    { title: 'Comprar maçã', userId },
  ])
}

seed().catch((error) => {
  console.error('Error seeding users:', error)
})
