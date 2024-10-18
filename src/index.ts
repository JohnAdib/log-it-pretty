import { ILogItPretty } from './i-log-it-pretty.js'
import { formatDuration } from './utils/format/format-duration.js'
import { formatMethod } from './utils/format/format-method.js'
import { formatUrl } from './utils/format/format-url.js'
import { formatStatusCode } from './utils/format/fortmat-status-code.js'

export const logItPretty = ({
  statusCode,
  method,
  duration,
  startTime,
  url
}: ILogItPretty = {}): string => {
  const logParts = [
    formatStatusCode(statusCode),
    formatMethod(method),
    formatDuration(duration, startTime),
    formatUrl(url)
  ]

  return logParts.filter(Boolean).join(' ')
}
