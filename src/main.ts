import Canvas from './Canvas'
import Color from './Color'
import Vec2 from './Vec2'
import Vertex from './Vertex'

const ele = document.getElementById('screen') as HTMLCanvasElement
const canvas = new Canvas(ele)

const v1 = new Vertex(new Vec2(100, 100), Color.red())
const v2 = new Vertex(new Vec2(300, 100), Color.green())

canvas.drawScanLine(v1, v2)

canvas.render()
