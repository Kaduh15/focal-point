import { FormAddTask } from '../FormAddTask'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'

import style from './style.module.scss'

export function ModalAddTask() {
  return (
    <Modal>
      <h2>Nova tarefa</h2>
      <FormAddTask id="add-test-form" />
      <div className={style.buttons}>
        <Button form="add-test-form">Adicionar</Button>
        <Button isLink href="/" variant="secondary">
          Cancelar
        </Button>
      </div>
    </Modal>
  )
}
