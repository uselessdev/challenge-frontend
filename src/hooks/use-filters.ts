import { ChangeEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function createSearchParams(state: Record<string, string[]>) {
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(state)
        .map(([key, values]) => [key, values.join(';')])
        .filter(([_, value]) => Boolean(value))
    )
  ).toString()
}

export function useFilters() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const { s: term, ...filters } = Object.fromEntries([...params])

  const state = Object.fromEntries(
    Object.entries(filters).map(([key, values]) => [key, values.split(';')])
  )

  const onChangeFilter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      const url = createSearchParams({
        ...state,
        [target.name]: [...new Set(state[target.name] ?? []), target.value],
      })

      navigate(`/busca?s=${term}&${url}`)
    } else {
      const url = createSearchParams({
        ...state,
        [target.name]: state[target.name].filter(item => item !== target.value),
      })

      navigate(`/busca?s=${term}&${url}`)
    }
  }

  return {
    term,
    state,
    onChangeFilter,
    hasFilters: Boolean(Object.keys(state).length),
  }
}
