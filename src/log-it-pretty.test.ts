import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ILogItPretty } from './i-log-it-pretty.js'
import { PrettyLogger } from './log-it-pretty.js'

describe('PrettyLogger', () => {
  let logSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // Spy on console.log
    logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    // Restore console.log after each test
    logSpy.mockRestore()
  })

  // TODO: fix this test and add more tests
  it.skip('should correctly format the log message', () => {
    const logOptions: ILogItPretty = {
      statusCode: 200,
      method: 'GET',
      url: '/api/v1/users',
      startTime: [0, 0]
    }

    const logger = new PrettyLogger(logOptions)

    const logMessage = logger.log()

    expect(logMessage).toBe('✅ 200 👍 GET 618237.373s /api/v1/users')
  })
})
