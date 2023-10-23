export interface Orders {
  _id: string
  status: string
  date: string
  client: string
  subTotal: string
}

export const OrdersData: Orders[] = [
  {
    _id: '651d8659b9ceada7ad82451a',
    status: 'Realizado',
    date: '10/10/2023',
    client: 'José Augusto',
    subTotal: 'R$ 3240,00',
  },
]
