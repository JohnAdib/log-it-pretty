export type ColorType = 'dim' | 'bright' | 'blue' | 'cyan' | 'reset'

const colorCodes: { [key in ColorType]: string } = {
  dim: '\x1b[2m',
  bright: '\x1b[1m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
}

export const getColorCode = (type: ColorType): string => {
  if (!(type in colorCodes)) {
    return colorCodes.reset
  }
  return colorCodes[type]
}
