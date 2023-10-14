import React from 'react'
import Header from '../../components/Header'
import Input from '../../shared/Input'
import { phoneMask } from '../../utils/masks'
import { Container } from './styles'

function Main() {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    event.target.value = phoneMask(value)
  }

  return (
    <>
      <Header title="Novo Pedido" />
      <Container>
        <form>
          <Input label="Cliente" type="text" placeholder="Ex.: João Augusto" />
          <Input
            label="Telefone"
            type="tel"
            placeholder="Ex.: (99) 99999-9999"
            onChange={handleInputChange}
          />
          <Input
            label="Endereço"
            type="text"
            placeholder="Ex.: Rua das Rosas 41"
          />
        </form>
      </Container>
    </>
  )
}

export default Main
