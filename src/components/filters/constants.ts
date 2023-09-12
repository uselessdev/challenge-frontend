import { FilterContentProps } from './types'

export const filtersWithInitialState: FilterContentProps = {
  price: {
    title: 'Preço',
    name: 'preco',
    items: [
      {
        id: 1,
        label: 'de R$0 até R$30',
        value: '0-30',
      },
      {
        id: 2,
        label: 'de R$31 até R$50',
        value: '31-50',
      },
      {
        id: 3,
        label: 'de R$51 até R$100',
        value: '51-100',
      },
      {
        id: 4,
        label: 'Mais de R$100',
        value: '100',
      },
    ],
  },
  availableItems: {
    title: 'Disponibilidade para venda',
    name: 'disponibilidade',
    items: [
      {
        id: 1,
        value: 'FOR_SALE',
        label: 'Disponível',
      },
      {
        id: 2,
        value: 'NOT_FOR_SALE',
        label: 'Não Disponível',
      },
    ],
  },
  availableFormats: {
    title: 'Formatos disponíveis',
    name: 'formatos',
    items: [
      {
        id: 1,
        value: 'epub',
        label: 'EPUB',
      },
      {
        id: 2,
        value: 'pdf',
        label: 'PDF',
      },
    ],
  },
}
