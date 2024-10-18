import { expect, test } from 'vitest'
import { colorizeText } from './colorize-text.js'

test('colorizeText wraps text with correct ANSI codes', () => {
  const result = colorizeText('Hello', 'bright')
  expect(result).toBe('\x1b[1mHello\x1b[0m')
})

test('colorizeText wraps text with cyan color code', () => {
  const result = colorizeText('World', 'cyan')
  expect(result).toBe('\x1b[36mWorld\x1b[0m')
})
