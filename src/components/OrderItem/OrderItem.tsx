import CreatableSelect, { SingleValue } from 'react-select'
import Input from '../../shared/Input'
import { Container } from './styles'
import { FaTrashAlt } from 'react-icons/fa'

export interface ItemProps {
  id: number
  productId: string
  price: number
  qtd: number
  total: number
}

interface OrderItemProps {
  item: ItemProps
  handleInputChange: (
    orderItem: ItemProps,
    event?: React.ChangeEvent<HTMLInputElement>,
    selectEvent?: SingleValue<React.ChangeEvent<HTMLInputElement>>,
  ) => void
  handleDeleteItem: (orderItem: ItemProps) => void
}

const products = [
  { value: '1', label: 'Tábua de 30' },
  { value: '2', label: 'Tábua de 25' },
  { value: '3', label: 'Tábua de 20' },
  { value: '4', label: 'Tábua de 15' },
  { value: '5', label: 'Tábua de 12' },
  { value: '6', label: 'Tábua de 10' },
]

function OrderItem({
  item,
  handleInputChange,
  handleDeleteItem,
}: OrderItemProps) {
  const maskCurrency = (value: string, locale = 'pt-BR', currency = 'BRL') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    })
      .format(Number(value.replace('R$', '').replace(',', '.').trim()))
      .toString()
  }

  return (
    <Container>
      <div className="select">
        <label>Produto</label>
        <CreatableSelect
          name="productId"
          onChange={(e: SingleValue<React.ChangeEvent<HTMLInputElement>>) =>
            handleInputChange(item, undefined, e)
          }
          placeholder="Tábua de 30"
          options={products}
        />
      </div>
      <Input
        name="price"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.replace(/[^0-9,]/g, '')
          handleInputChange(item, e)
        }}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
          (e.target.value = maskCurrency(e.target.value))
        }
        label="Preço U."
        placeholder="R$ 35,00"
      />
      <Input
        name="qtd"
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleInputChange(item, e)
        }}
        label="Qtd."
        placeholder="20"
      />
      <Input
        name="total"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.replace(/[^0-9,]/g, '')
          handleInputChange(item, e)
        }}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
          (e.target.value = maskCurrency(e.target.value))
        }
        label="Total"
        placeholder="R$ 700,00"
      />
      <button type="button" onClick={() => handleDeleteItem(item)}>
        <FaTrashAlt />
      </button>
    </Container>
  )
}

export default OrderItem
