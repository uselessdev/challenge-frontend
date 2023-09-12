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
  filters,
  onChange,
}: FilterProps) => {
  return (
    <Content>
      {mainTitle ? (
        <ContentTitle>{mainTitle}</ContentTitle>
      ) : null}

      {/* {hasSelectedFilters ? (
        <Button onClick={resetFilters}>Limpar Filtro</Button>
      ) : null} */}

      {Object.entries(filtersWithInitialState).map(([filterType, category]) => (
        <FilterWrapper key={filterType}>
          <FilterTitle>{category.title}</FilterTitle>

          <FilterContent>
            <ul>
              {category?.items?.map((item: any) => {
                const checked = filters ? Boolean((filters[category.name] ?? []).find((i: string) => i === item.value)) : false;

                return (
                <li key={item.id}>
                  <label>
                    <input
                      name={category.name}
                      type="checkbox"
                      value={item.rangeValue || item.value}
                      defaultChecked={checked}
                      onChange={onChange}
                    />
                    <span>{item.label}</span>
                  </label>
                </li>
              )})}
            </ul>
          </FilterContent>
        </FilterWrapper>
      ))}
    </Content>
  )
}

export default Filter
