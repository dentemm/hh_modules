import * as React from 'react'

import * as h337 from 'heatmap.js'

interface Dimensions {
  offsetX: number,
  offsetY: number,
  width: number,
  height: number
}

interface Props {
  test: boolean,
  imageUrl: string
}

const Heatmap: React.FC<Props> = (props) => {

  const heatmapRef: React.MutableRefObject<h337.Heatmap<"value", "x", "y"> | undefined>  = React.useRef(undefined)

  const ref = React.useRef<HTMLImageElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const [dimensions, setDimensions] = React.useState<Dimensions>({offsetX: 0, offsetY: 0, width: 0, height: 0}) 

  React.useLayoutEffect(() => {
    heatmapRef.current = createHeatMapInstance()
    heatmapRef.current?.setData({min: 0, max: 0, data: []})

    setTimeout(() => {
      calculateDimensions()
    }, 1000);

  }, [heatmapRef])

  React.useEffect(() => {

    heatmapRef.current = createHeatMapInstance()
    heatmapRef.current?.setData({min: 0, max: 0, data: []})

  }, [dimensions])

  React.useLayoutEffect(() => {

    if (!heatmapRef.current) {
      return
    }

    if (props.test) {
      heatmapRef.current!.setData(createRandomData(dimensions.width, dimensions.height))
    } else {
      heatmapRef.current!.setData({min: 0, max: 0, data: []})
    }

  }, [props.test, dimensions.width, dimensions.height])

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const xValue = event.clientX - dimensions.offsetX
    const yValuye = event.nativeEvent.pageY - dimensions.offsetY

    if (heatmapRef.current) {
      heatmapRef.current.addData({x: xValue, y: yValuye, value: 1})
    }
  }

  const calculateDimensions = () => {

    if (ref.current) {
      setDimensions({
        width: ref.current.width,
        height: ref.current.height,
        // Page Y offset for initial scroll position
        offsetY: ref.current.y + window.pageYOffset,
        offsetX: ref.current.x
      })
    }
  }

  return (
      <div 
        ref={containerRef}
        id='heatmapContainer'
        onClick={onClick}
        style={{width: dimensions.width, height: dimensions.height}}
      >
        <img
          ref={ref}
          src={props.imageUrl}
          // src='https://s3-storage.textopus.nl/wp-content/uploads/2015/02/18064453/mooi-belichte-foto.jpg'
          alt=''
        /> 
      </div>
  )
}

const createRandomData = (width: number = 200, height: number = 200): h337.HeatmapData<Record<"value" | "x" | "y", number>> => {
    
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