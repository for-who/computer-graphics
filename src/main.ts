import Canvas from './Canvas'
import Color from './Color'
import Vec2 from './Vec2'
import Vertex from './Vertex'

const ele = document.getElementById('screen') as HTMLCanvasElement
const canvas = new Canvas(ele)

function __main() {
  // drawLine()
  // drawTriangleTwoParts()
  drawTriangle()
}

function drawTriangle() {
  const v1 = new Vertex(new Vec2(300, 200), Color.red())
  const v2 = new Vertex(new Vec2(100, 250), Color.green())
  const v3 = new Vertex(new Vec2(450, 350), Color.blue())

  canvas.drawTriangle(v1, v2, v3)
  canvas.render()
}

function drawTriangleTwoParts() {
  const v1 = new Vertex(new Vec2(200, 100), Color.red())
  const v2 = new Vertex(new Vec2(100, 200), Color.green())
  const v3 = new Vertex(new Vec2(300, 200), Color.blue())
  const v4 = new Vertex(new Vec2(200, 300), Color.black())

  canvas.drawTriangle1(v1, v2, v3)
  canvas.drawTriangle2(v2, v3, v4)

  canvas.render()
}

function drawLine() {
  const v1 = new Vertex(new Vec2(100, 100), Color.red())
  const v2 = new Vertex(new Vec2(300, 100), Color.green())

  canvas.drawScanLine(v1, v2)

  canvas.render()
}

__main()
