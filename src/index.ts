import { colorizeText } from './colorize-text.js'
import { ILogItPretty } from './i-log-it-pretty.js'
import { mapStatusToDetailEmoji } from './map-status-to-detail-emoji.js'
import { mapStatusToEmoji } from './map-status-to-emoji.js'

export const logItPretty = ({
  statusCode,
  method,
  duration,
  url
}: ILogItPretty = {}): string => {
  let logMsg = ''

  if (statusCode !== undefined) {
    const statusEmoji = mapStatusToEmoji(statusCode)
    const statusCodeFormatted = colorizeText(statusCode.toString(), 'blue')
    const statusDetailEmoji = mapStatusToDetailEmoji(statusCode)
    logMsg += `${statusEmoji} ${statusCodeFormatted} ${statusDetailEmoji} `
  }

  if (method !== undefined) {
    const reqMethod = colorizeText(method, 'bright')
    logMsg += `${reqMethod} `
  }

  if (duration !== undefined) {
    const reqDuration = (duration / 1000).toFixed(3) + 's'
    const responseTime = colorizeText(reqDuration, 'dim')
    logMsg += `${responseTime} `
  }

  if (url !== undefined) {
    const reqUrl = colorizeText(url, 'cyan')
    logMsg += `${reqUrl}`
  }

  return logMsg.trim()
}
