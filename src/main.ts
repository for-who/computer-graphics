import Canvas from './Canvas'
import Color from './Color'
import Vec3 from './Vec3'
import Vertex from './Vertex'

const ele = document.getElementById('screen') as HTMLCanvasElement
const canvas = new Canvas(ele)

function __main() {
  // drawLine()
  // drawTriangleTwoParts()
  // drawTriangle()
  transition()
}

function transition() {
  const v1 = new Vertex(new Vec3(0, 0.5, 0), Color.red())
  const v2 = new Vertex(new Vec3(-0.5, -0.5, 0), Color.green())
  const v3 = new Vertex(new Vec3(0.5, -0.5, 0), Color.blue())

  const transition = new Vec3(0.01, 0, 0)

  setInterval(() => {
    canvas.clear()
    v1.position.add(transition)
    v2.position.add(transition)
    v3.position.add(transition)

    canvas.drawTriangle(v1, v2, v3)
    canvas.render()
  }, 1000 / 60)
}

function drawTriangle() {
  const v1 = new Vertex(new Vec3(0, 0.5, 10), Color.red())
  const v2 = new Vertex(new Vec3(-0.5, -0.5, 10), Color.green())
  const v3 = new Vertex(new Vec3(0.5, -0.5, 10), Color.blue())

  // const v4 = new Vertex(new Vec3(300, 250, 0), Color.black())
  // const v5 = new Vertex(new Vec3(100, 300, 0), Color.red())
  // const v6 = new Vertex(new Vec3(450, 400, 0), Color.green())

  canvas.drawTriangle(v1, v2, v3)
  // canvas.drawTriangle(v4, v5, v6)
  canvas.render()
}

function drawTriangleTwoParts() {
  const v1 = new Vertex(new Vec3(200, 100), Color.red())
  const v2 = new Vertex(new Vec3(100, 200), Color.green())
  const v3 = new Vertex(new Vec3(300, 200), Color.blue())
  const v4 = new Vertex(new Vec3(200, 300), Color.black())

  canvas.drawTriangle1(v1, v2, v3)
  canvas.drawTriangle2(v2, v3, v4)

  canvas.render()
}

function drawLine() {
  const v1 = new Vertex(new Vec3(0, 0), Color.red())
  const v2 = new Vertex(new Vec3(0.5, 0.5), Color.green())

  canvas.drawScanLine(v1, v2)

  canvas.render()
}

__main()
