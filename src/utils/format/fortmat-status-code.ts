import { colorizeText } from '../color/colorize-text.js'
import { mapStatusToDetailEmoji } from '../map-status/map-status-to-detail-emoji.js'
import { mapStatusToEmoji } from '../map-status/map-status-to-emoji.js'

export const formatStatusCode = (statusCode: number | undefined): string => {
  if (statusCode === undefined) return ''
  const statusEmoji = mapStatusToEmoji(statusCode)
  const statusCodeFormatted = colorizeText(statusCode.toString(), 'blue')
  const statusDetailEmoji = mapStatusToDetailEmoji(statusCode)
  return `${statusEmoji} ${statusCodeFormatted} ${statusDetailEmoji}`
}
