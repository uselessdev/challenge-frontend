import { expect, afterEach, beforeAll, afterAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import { server } from '../src/mocks/server'

expect.extend(matchers)

/**
 * Fix the react-slick error with matchMedia on tests.
 * @see https://github.com/akiran/react-slick/issues/742
 */
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    }
  }

beforeAll(() => server.listen())

afterEach(() => {
  cleanup()
  server.resetHandlers()
})

afterAll(() => server.close())
