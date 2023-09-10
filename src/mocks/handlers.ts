import { rest } from 'msw'
import data from './data'

export const GOOGLE_BOOKS_API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&startIndex=0&maxResults=10`

export const handlers = [
  rest.get(GOOGLE_BOOKS_API_ENDPOINT, (req, res, ctx) => {
    return res(ctx.delay(400), ctx.status(200), ctx.json(data))
  }),
]
