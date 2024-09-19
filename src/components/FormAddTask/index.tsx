import { getUserByIdAction } from '@/actions/getUser'
import { handleAddTask } from '@/actions/handleAddTask'
import { redirect } from 'next/navigation'
import React from 'react'
import { Input } from '../ui/Input'
import style from './style.module.scss'
import { cookies } from 'next/headers'

type FormAddTaskProps = {} & React.FormHTMLAttributes<HTMLFormElement>

export function FormAddTask({ ...FormAddTaskProps }: FormAddTaskProps) {
  async function FormAddTaskSubmit(data: FormData) {
    'use server'

    const title = data.get('title')
    const userId = cookies().get('userId')?.value || ''
    const [user, err] = await getUserByIdAction({ id: userId })

    if (err || !user) {
      return
    }

    if (!title || typeof title !== 'string') {
      console.error('Title is not a string')
      return
    }

    await handleAddTask({ title, userId: user.id })
    redirect('/')
  }

  return (
    <form
      action={FormAddTaskSubmit}
      className={style.form}
      {...FormAddTaskProps}
    >
      <label htmlFor="title">Título</label>
      <Input
        name="title"
        type="text"
        placeholder="Digite a sua tarefa"
        id="title"
      />
    </form>
  )
}
