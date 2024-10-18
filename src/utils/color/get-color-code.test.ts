import { expect, test } from 'vitest'
import { ColorType, getColorCode } from './get-color-code.js'

test('getColorCode returns correct ANSI code for dim', () => {
  expect(getColorCode('dim')).toBe('\x1b[2m')
})

test('getColorCode returns correct ANSI code for bright', () => {
  expect(getColorCode('bright')).toBe('\x1b[1m')
})

test('getColorCode returns correct ANSI code for blue', () => {
  expect(getColorCode('blue')).toBe('\x1b[34m')
})

test('getColorCode returns correct ANSI code for cyan', () => {
  expect(getColorCode('cyan')).toBe('\x1b[36m')
})

test('getColorCode returns reset ANSI code for invalid color', () => {
  expect(getColorCode('invalid' as ColorType)).toBe('\x1b[0m')
})
