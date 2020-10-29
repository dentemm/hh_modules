import * as React from 'react'

import image from '../../static/dev/images/heatmap.jpg'

import * as h337 from 'heatmap.js'

interface Dimensions {
  offsetX: number,
  offsetY: number,
  width: number,
  height: number
}

interface Props {
  test: boolean
}

const Heatmap: React.FC<Props> = (props) => {

  const heatmapRef: React.MutableRefObject<h337.Heatmap<"value", "x", "y"> | undefined>  = React.useRef(undefined)

  const ref = React.useRef<HTMLImageElement>(null)

  const [dimensions, setDimensions] = React.useState<Dimensions>({offsetX: 0, offsetY: 0, width: 0, height: 0}) 

  React.useEffect(() => {

    heatmapRef.current?.setData(createInitialData(ref.current!.offsetWidth, ref.current!.offsetHeight))

    const data: Dimensions = {
      offsetX: ref.current!.offsetLeft,
      offsetY: ref.current!.offsetHeight,
      width: ref.current!.offsetWidth,
      height: ref.current!.offsetHeight
    }

    console.log('DIMENSIES')
    console.log(data)

  }, [props.test])

  React.useEffect(() => {
    heatmapRef.current = createHeatMapInstance()
  }, [])

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('adding datapoint')
    console.log(`x: ${event.pageX} - y: ${event.pageY}`)

    if (heatmapRef.current) {
      // heatmapRef.current.addData({x: event.pageX, y: event.pageY, value: 1})
      heatmapRef.current.addData({x: 50, y: 50, value: 1})
    }
  }

  return (
    <div 
      id='heatmapContainer'
      onClick={onClick}
      style={{width: 1233, height: 865, backgroundColor: 'red'}}
      // style={{width: dimensions.width, height: dimensions.height, backgroundColor: 'red'}}
    >
      <img
        ref={ref}
        src={image}
        alt=''
      /> 
    </div>
    // <img
    //   ref={ref}
    //   id='heatmapContainer'
    //   onClick={onClick}
    //   src={image}
    //   alt=''
    // />
  )
}

const createInitialData = (width: number = 200, height: number = 200): h337.HeatmapData<Record<"value" | "x" | "y", number>> => {
    
  // now generate some random data
  let points: h337.DataPoint[] = []
  let max = 0
  let min = 0
  let len = 50

  while (len--) {
    const val = Math.floor(Math.random() * 3)

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

const createHeatMapInstance = () => {
  return h337.create({
    container: document.getElementById('heatmapContainer')!,
    // radius: 25,
    // opacity: 0.6
  })
}

export default Heatmap