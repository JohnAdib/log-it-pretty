import { ILogItPretty } from './i-log-it-pretty.js'
import { formatDuration } from './utils/format/format-duration.js'
import { formatMethod } from './utils/format/format-method.js'
import { formatUrl } from './utils/format/format-url.js'
import { formatStatusCode } from './utils/format/fortmat-status-code.js'

export class PrettyLogger {
  private logParts: string[] = []

  constructor(logOptions: ILogItPretty) {
    const { statusCode, method, duration, startTime, url } = logOptions

    this.logParts = [
      formatStatusCode(statusCode),
      formatMethod(method),
      formatDuration(duration, startTime),
      formatUrl(url)
    ]
  }

  getLogMessage(): string {
    return this.logParts.filter(Boolean).join(' ').trim()
  }

  logToConsole(): void {
    console.log(this.getLogMessage())
  }
}
