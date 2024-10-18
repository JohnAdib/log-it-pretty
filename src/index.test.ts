import { expect, test } from 'vitest'
import { logItPretty } from './index.js'

test('logItPretty returns formatted message with all values', () => {
  const result = logItPretty({
    statusCode: 200,
    method: 'GET',
    duration: 500,
    url: '/api/v1/users'
  })
  expect(result).toContain('✅')
  expect(result).toContain('200')
  expect(result).toContain('GET')
  expect(result).toContain('0.500s')
  expect(result).toContain('/api/v1/users')
})

test('logItPretty excludes undefined values from the final message', () => {
  const result = logItPretty({
    method: 'POST'
  })
  expect(result).toContain('POST')
  expect(result).not.toContain('200')
  expect(result).not.toContain('0.500s')
  expect(result).not.toContain('/api/v1/users')
})
