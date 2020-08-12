import { interpolate } from './utils'

class Color {
  public constructor(
    public r: number,
    public g: number,
    public b: number,
    public a: number,
  ) {}

  interpolate(other: Color, factor: number) {
    const { r: r1, g: g1, b: b1 } = this
    const { r: r2, g: g2, b: b2 } = other

    const floor = Math.floor

    const r = interpolate(r1, r2, factor)
    const g = interpolate(g1, g2, factor)
    const b = interpolate(b1, b2, factor)

    const newColor = new Color(r, g, b, 255)

    return newColor
  }

  static black() {
    return new Color(0, 0, 0, 255)
  }

  static white() {
    return new Color(255, 255, 255, 255)
  }

  static red() {
    return new Color(255, 0, 0, 255)
  }

  static green() {
    return new Color(0, 255, 0, 255)
  }

  static blue() {
    return new Color(0, 0, 255, 255)
  }
}

export default Color
