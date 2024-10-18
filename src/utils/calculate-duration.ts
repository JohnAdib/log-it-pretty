interface DurationOptions {
  startTime: [number, number]
}

export const calculateDuration = ({ startTime }: DurationOptions): number => {
  const [seconds, nanoseconds] = process.hrtime(startTime)
  return seconds * 1e3 + nanoseconds * 1e-6
}
