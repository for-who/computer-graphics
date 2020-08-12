export function interpolate(a: number, b: number, factor: number) {
  return Math.floor((b - a) * factor + a)
}
