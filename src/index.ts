import { ILogItPretty } from './i-log-it-pretty.js'
import { PrettyLogger } from './log-it-pretty.js'

export const logItPretty = (
  logOptions: ILogItPretty
): string | PrettyLogger => {
  const prettyLogger = new PrettyLogger(logOptions)

  return prettyLogger.isChainingUsed
    ? prettyLogger
    : prettyLogger.getLogMessage()
}
