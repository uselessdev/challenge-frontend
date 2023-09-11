import { rest } from 'msw'
import data from './data'

export const GOOGLE_BOOKS_API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes`

export const handlers = [
  rest.get(GOOGLE_BOOKS_API_ENDPOINT, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  }),
]
