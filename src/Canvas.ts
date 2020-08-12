import Color from './Color'
import Vertex from './Vertex'

class Canvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  w: number
  h: number
  pixels: ImageData
  bytesPerPixel: number = 4

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.w = canvas.width
    this.h = canvas.height
    this.pixels = this.context.getImageData(0, 0, this.w, this.h)
  }

  private setPixel(x: number, y: number, color: Color) {
    x = Math.floor(x)
    y = Math.floor(y)

    let offset = (this.w * y + x) * this.bytesPerPixel

    let p = this.pixels.data
    const { r, g, b, a } = color

    p[offset] = r
    p[offset + 1] = g
    p[offset + 2] = b
    p[offset + 3] = a
  }

  drawPoint(x: number, y: number, color: Color = Color.black()) {
    this.setPixel(x, y, color)
  }

  clear(color: Color = Color.white()) {
    for (let i = 0; i < this.w; i++) {
      for (let j = 0; j < this.h; j++) {
        this.setPixel(i, j, color)
      }
    }
  }

  //  y1 = y2
  drawScanLine(v1: Vertex, v2: Vertex) {
    const { x: x1, y: y1 } = v1.position
    const { x: x2, y: y2 } = v2.position

    const xLeft = x2 > x1 ? x1 : x2
    const xRight = x2 > x1 ? x2 : x1

    for (let x = xLeft; x <= xRight; x++) {
      this.drawPoint(x, y1)
    }
  }

  render() {
    const { pixels, context } = this
    context.putImageData(pixels, 0, 0)
  }
}

export default Canvas
