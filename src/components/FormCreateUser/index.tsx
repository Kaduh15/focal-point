import { getUserByIdAction } from '@/actions/getUser'
import { redirect } from 'next/navigation'
import React from 'react'
import { Input } from '../ui/Input'
import style from './style.module.scss'
import { createUserAction } from '@/actions/createUser'
import { cookies } from 'next/headers'

type FormCreateUserProps = {} & React.FormHTMLAttributes<HTMLFormElement>

export function FormCreateUser({
  ...FormCreateUserProps
}: FormCreateUserProps) {
  async function FormCreateUserSubmit(data: FormData) {
    'use server'
    const name = data.get('name')
    const [user, err] = await getUserByIdAction({ id: '1' })

    if (err || !user) {
      return
    }

    if (!name || typeof name !== 'string') {
      console.error('Title is not a string')
      return
    }

    const [createdUser] = await createUserAction({ name })

    if (!createdUser) {
      console.error('User not created')
      return
    }

    cookies().set('userId', createdUser.id, {
      path: '/',
    })

    redirect('/')
  }

  return (
    <form
      action={FormCreateUserSubmit}
      className={style.form}
      {...FormCreateUserProps}
    >
      <label htmlFor="name">Nome</label>
      <Input
        name="name"
        type="text"
        placeholder="Digite a seu nome"
        id="name"
      />
    </form>
  )
}
