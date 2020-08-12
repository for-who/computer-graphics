import { interpolate } from './utils'

class Vec2 {
  constructor(public x: number, public y: number) {}

  interpolate(other: Vec2, factor: number) {
    const x = interpolate(this.x, other.x, factor)
    const y = interpolate(this.y, other.y, factor)

    const v = new Vec2(x, y)
    return v
  }
}

export default Vec2
