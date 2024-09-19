import { FormCreateUser } from '../FormCreateUser'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'

import style from './style.module.scss'

export function ModalCreateUser() {
  return (
    <Modal>
      <h2>Cadastrar usuário</h2>
      <FormCreateUser id="create-user-form" />
      <div className={style.buttons}>
        <Button form="create-user-form">Criar</Button>
      </div>
    </Modal>
  )
}
