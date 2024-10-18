import { colorizeText } from '../color/colorize-text.js'

export const formatMethod = (method: string | undefined): string => {
  if (method === undefined) return ''
  return colorizeText(method, 'bright')
}
