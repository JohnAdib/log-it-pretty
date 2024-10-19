import { ILogItPretty } from './i-log-it-pretty.js'
import { PrettyLogger } from './log-it-pretty.js'

export const logItPretty = (
  logOptions: ILogItPretty
): string | PrettyLogger => {
  const prettyLogger = new PrettyLogger(logOptions)

  // Define a variable to check if logOptions is an empty object, meaning no options provided
  const hasNoLogOptions = Object.keys(logOptions).length === 0

  // If logOptions is missing (null/undefined) or is an empty object, return the formatted string directly
  if (!logOptions || hasNoLogOptions) {
    return prettyLogger.getLogMessage()
  }

  // Otherwise, return the PrettyLogger instance for chaining (to use logToConsole)
  return prettyLogger
}
