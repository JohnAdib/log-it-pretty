import { colorizeText } from '../color/colorize-text.js'

export const formatUrl = (url: string | undefined): string => {
  if (url === undefined) return ''
  return colorizeText(url, 'cyan')
}
