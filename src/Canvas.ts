import Color from './Color'

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

  render() {
    const { pixels, context } = this
    context.putImageData(pixels, 0, 0)
  }
}

export default Canvas
