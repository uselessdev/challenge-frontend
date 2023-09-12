![image](https://assets-global.website-files.com/61155c49f7b752684a9f0584/61201e989ae795462db99155_logo-arvore.svg)

<div id="user-content-toc">
  <ul>
    <summary><h1 style="display: inline-block;">Challenge Frontend</h1></summary>
  </ul>
</div>

## Introduçãao

Olá este é o desafio resolvido, antes de avaliar e ver se está tudo de acordo, tem algumas coisas que eu gostaria
de apresentar neste **readme**.

## Conteúdo

- [Implementação](#implementação)
- [Decisões de implementação](#decisões-de-implementação)
  - [Futuro](#futuro)
- [Iniciando a aplicação local](#iniciando-a-aplicação-local)

### Implementação

Foi implementado a funcionalidade de busca com autocomplete e redirecionamento para a página de `/busca` onde são
exibidos resultados encontrados após uma busca pelo termo pesquisado no campo de busca.

Além disso foi adicionado um `debounce` para iniciar a chamada para a API apenas 250ms depois que o usuário começar
a pesquisar e foi refatorado parte dos componentes para garantir que o layout functione de forma responsiva.

### Decisões de implementação

Para realizar as requisições para a api eu centralizei a chamada em uma função especifica que recebe alguns parâmetros
como termo, número máximo de resultados e categoria.

Também decidi utilizar a biblioteca **react-query** com isso eu ganho um controle maior de revalidação de request,
cache e invalidação de cache.

Para os filtros eu não fiz integrado com a API, apenas filtrei os valores já buscados.

Para os testes estou utilizando duas estratégias, unitários nos componentes de `Search` e `Filter`, para não
precisar fazer chamadas para a API nestes testes, utilizei a biblioteca **msw** que faz uma interceptação
da URL requisitada e retorna os valores definidos em um mock.

Para testes de e2e no entanto a chamada é realizada para a API, neste caso decidi utilizar o **playwright** por ser mais
simples (tem uma api muito parecida com a do @testing-library/react) e por ser mais performático que o cypress.

### Futuro

Gostaria de deixar registrados coisas que eu implementaria se tivesse mais tempo, ou para uma aplicação real.

Eu melhoraria a responsividade tanto dos filtros quanto da busca com autocomplete para melhorar a experiência do
usuário em dispositivos móveis, além de algumas mudanças no componente e hook de filtros para deixar mais genérico
e com uma tipagem melhor, e um indicador de _loading_ no autocomplete, cards de livros, etc.

Também adicionaria paginação infinita na página de resultados.

Bem, dito isso, abaixo deixo instruções de como rodar o projeto local.

## Iniciando a aplicação local

Após fazer um clone deste repositório, execute os seguintes passos abaixo:

_(deixei como exemplo o uso do `yarn` porém deve funcionar com `npm` ou preferencialmento `pnpm`)_

1. Instale as dependências: `yarn install`
2. Execute o server local com: `yarn run dev`

### Rodando os testes

Para rodar os testes unitários após instalar as dependências basta executar: `yarn test # ou pnpm run test`.

Para rodar os testes e2e se você ainda não tem o _playwright_ você pode seguir esta documentação, após isso
basta executar: `npx playwright test` ou `npx playwright test --ui`
