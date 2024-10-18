import { calculateDuration } from '../calculate-duration.js'
import { colorizeText } from '../color/colorize-text.js'

export const formatDuration = (
  duration: number | undefined,
  startTime: [number, number] | undefined
): string => {
  if (!duration && startTime) {
    duration = calculateDuration({ startTime })
  }

  if (duration === undefined) return ''
  const reqDuration = (duration / 1000).toFixed(3) + 's'
  return colorizeText(reqDuration, 'dim')
}
