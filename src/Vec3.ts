import { interpolate } from './utils'

class Vec3 {
  constructor(public x: number, public y: number, public z: number = 0) {}

  interpolate(other: Vec3, factor: number) {
    const x = interpolate(this.x, other.x, factor)
    const y = interpolate(this.y, other.y, factor)
    const z = interpolate(this.z, other.z, factor)

    const v = new Vec3(x, y, z)
    return v
  }
}

export default Vec3
