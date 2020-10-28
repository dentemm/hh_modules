import * as React from 'react'

import image from '../../static/dev/images/heatmap.jpg'

import * as h337 from 'heatmap.js'

const Heatmap: React.FC = () => {

  const createHeatMapInstance = () => {
    return h337.create({
      container: document.getElementById('heatmapContainer')!,
      radius: 60
    })
  }

  const heatmapRef: React.MutableRefObject<h337.Heatmap<"value", "x", "y"> | undefined>  = React.useRef(undefined)

  React.useEffect(() => {

    heatmapRef.current = createHeatMapInstance()

    if (heatmapRef.current) {
      heatmapRef.current.setData(createInitialData())
    }
  }, [])

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.pageX)
    console.log(event.pageY)

    if (heatmapRef.current) {
      console.log('adding data')
      heatmapRef.current.addData({x: event.pageX, y: event.pageY, value: 1})
    }
  }

  const createInitialData = (): h337.HeatmapData<Record<"value" | "x" | "y", number>> => {
    
    // now generate some random data
    let points: h337.DataPoint[] = []
    let max = 0
    let min = 0
    const width = 700
    const height = 490
    let len = 20

    while (len--) {
      const val = Math.floor(Math.random() * 5)

      max = Math.max(max, val)
      min = Math.min(min, val)

      const point = {
       x: Math.floor(Math.random() * width),
       y: Math.floor(Math.random() * height),
       value: val
      }
      points.push(point)
    }

    return {
      min,
      max: max,
      data: points
    }
  }

  return (
    <div 
      id='heatmapContainer'
      onClick={onClick}
      style={{width: 700, height: 490, backgroundColor: 'red'}}
    >
    <img
      // onClick={onClick}
      className="vw-100"
      src={image}
      alt=''
    /> 
    </div>
    // <img
    //   id='heatmapContainer'
    //   onClick={onClick}
    //   className="vw-100"
    //   src={image}
    //   alt=''
    // />
  )
}

export default Heatmap