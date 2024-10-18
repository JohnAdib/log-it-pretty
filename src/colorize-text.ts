import { ColorType, getColorCode } from './get-color-code'

export const colorizeText = (text: string, colorCode: ColorType): string => {
  return `${getColorCode(colorCode)}${text}${getColorCode('reset')}`
}
