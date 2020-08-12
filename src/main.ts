import Canvas from './Canvas'

const ele = document.getElementById('screen') as HTMLCanvasElement
const canvas = new Canvas(ele)

for (let i = 0; i < 10; i++) {
  canvas.drawPoint(i, 10)
}

canvas.render()
