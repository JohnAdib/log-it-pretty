import { ILogItPretty } from './i-log-it-pretty.js'
import { PrettyLogger } from './log-it-pretty.js'

export const logItPretty = (logOptions: ILogItPretty): PrettyLogger => {
  const prettyLogger = new PrettyLogger(logOptions)

  return prettyLogger
}
