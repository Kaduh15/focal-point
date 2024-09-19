import { getAllTasksByUserIdAction } from '@/actions/getAllTasksById'
import { ButtonOpenAddTask } from '@/components/ButtonOpenAddTask'
import { Header } from '@/components/Header'
import { ModalAddTask } from '@/components/ModalAddTask'
import { ModalDeleteTask } from '@/components/ModalDeleteTask'
import { Task } from '@/components/Task'
import { Separator } from '@/components/ui/Separator'
import React from 'react'
import style from './page.module.scss'
import { ModalCreateUser } from '@/components/ModalCreateUser'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type HomeProps = {
  searchParams: {
    deleteTask?: string
    addTask?: string
    createUser?: string
  }
}

export default async function Home({
  searchParams: { addTask, deleteTask, createUser },
}: HomeProps) {
  const userId = cookies().get('userId')?.value
  if (!userId && !createUser) {
    return redirect('/?createUser=1')
  }

  if (userId && createUser) {
    return redirect('/')
  }

  const [tasks, err] = await getAllTasksByUserIdAction({ id: userId || '' })

  if (err) {
    return
  }

  const { completedTasks, uncompletedTasks } = tasks.reduce<{
    completedTasks: React.JSX.Element[]
    uncompletedTasks: React.JSX.Element[]
  }>(
    (acc, task) => {
      acc[task.done ? 'completedTasks' : 'uncompletedTasks'].push(
        <Task key={task.id} id={task.id} title={task.title} done={task.done} />,
      )
      return acc
    },
    { completedTasks: [], uncompletedTasks: [] },
  )

  return (
    <>
      <div className={style.main}>
        <Header />
        <Separator />

        <div className={style.container}>
          <h2 className={style.date}>Suas Tarefas de hoje</h2>
          <div>{uncompletedTasks}</div>
          <h2 className={style.date}>Tarefas concluídas</h2>
          <div>{completedTasks}</div>
        </div>

        <ButtonOpenAddTask />
      </div>
      {addTask && <ModalAddTask />}
      {deleteTask && <ModalDeleteTask id={Number(deleteTask)} />}
      {createUser && !userId && <ModalCreateUser />}
    </>
  )
}
