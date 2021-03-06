import Color from './Color'
import Vec3 from './Vec3'

class Vertex {
  constructor(public position: Vec3, public color: Color) {}

  interpolate(other: Vertex, factor: number) {
    const { position: p1, color: c1 } = this
    const { position: p2, color: c2 } = other

    const p = p1.interpolate(p2, factor)
    const c = c1.interpolate(c2, factor)

    const v = new Vertex(p, c)
    return v
  }
}

export default Vertex
