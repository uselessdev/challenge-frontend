import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

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

afterEach(() => {
  cleanup()
})
