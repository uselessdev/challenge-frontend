import {
  Content,
  ContentTitle,
  Button,
  FilterTitle,
  FilterContent,
  FilterWrapper,
} from './styles'
import { FilterProps } from './types'
import { filtersWithInitialState } from './constants'

const Filter = ({
  mainTitle,
  hasSelectedFilters,
  resetFilters,
}: FilterProps) => {
  return (
    <Content>
      {mainTitle ? (
        <ContentTitle>{mainTitle}</ContentTitle>
      ) : null}

      {hasSelectedFilters ? (
        <Button onClick={resetFilters}>Limpar Filtro</Button>
      ) : null}

      {Object.entries(filtersWithInitialState).map(([filterType, category]) => (
        <FilterWrapper key={filterType}>
          <FilterTitle>{category.title}</FilterTitle>

          <FilterContent>
            <ul>
              {category?.items?.map((item: any) => (
                <li key={item.id}>
                  <label>
                    <input
                      name={item.label}
                      type="checkbox"
                    />
                    <span>{item.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </FilterContent>
        </FilterWrapper>
      ))}
    </Content>
  )
}

export default Filter
