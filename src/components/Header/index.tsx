import { getUserByIdAction } from '@/actions/getUser'
import dayjs from 'dayjs'
import Image from 'next/image'
import Logo from '../../assets/logo.svg'
import style from './style.module.scss'

import ptBR from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'

dayjs.locale(ptBR)

export async function Header() {
  const userId = cookies().get('userId')?.value

  if (!userId) {
    return
  }

  const [user, err] = await getUserByIdAction({ id: userId })

  if (err) {
    return
  }

  const today = dayjs().format('dddd, DD [de] MMMM [de] YYYY')

  return (
    <header className={style.container}>
      <Image src={Logo} width={150} height={36} alt="Logo" />
      <p className={style.messageWelcome}>Bem-vindo de volta, {user.name}</p>
      <p className={style.messageDate}>{today}</p>
    </header>
  )
}
