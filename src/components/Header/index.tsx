import { getUserByIdAction } from '@/actions/getUser'
import dayjs from 'dayjs'
import Image from 'next/image'
import Logo from '../../assets/logo.svg'
import style from './style.module.scss'

import ptBR from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

dayjs.locale(ptBR)

export async function Header() {
  const userId = cookies().get('userId')?.value

  if (!userId) {
    return
  }

  const [user, err] = await getUserByIdAction({ id: userId })

  if (!user) {
    redirect('/api/logout')
  }

  if (err) {
    return
  }

  const today = dayjs().format('dddd, DD [de] MMMM [de] YYYY')

  return (
    <header className={style.container}>
      <div>
        <Image src={Logo} width={150} height={36} alt="Logo" />
      </div>
      <p className={style.message_welcome}>Bem-vindo de volta, {user.name}</p>
      <p className={style.date}>{today}</p>
    </header>
  )
}
