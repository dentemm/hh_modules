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

  const ref = React.useRef<HTMLDivElement>(null)
  const ref2 = React.useRef<HTMLImageElement>(null)


  const [dimensions, setDimensions] = React.useState<Dimensions>({offsetX: 0, offsetY: 0, width: 0, height: 0}) 

  React.useEffect(() => {
    heatmapRef.current?.setData(createInitialData())

    const data2: Dimensions = {
      offsetX: ref2.current!.offsetLeft,
      offsetY: ref2.current!.offsetHeight,
      width: ref2.current!.offsetWidth,
      height: ref2.current!.offsetHeight
    }

    console.log('DIMENSIES 2')
    console.log(data2)

  }, [props.test])

  React.useEffect(() => {
    if (ref.current) {

      const data: Dimensions = {
        offsetX: ref.current.offsetLeft,
        offsetY: ref.current.offsetHeight,
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      }

      console.log('DIMENSIES')
      console.log(data)

      const data2: Dimensions = {
        offsetX: ref2.current!.offsetLeft,
        offsetY: ref2.current!.offsetHeight,
        width: ref2.current!.offsetWidth,
        height: ref2.current!.offsetHeight
      }

      console.log('DIMENSIES 2')
      console.log(data2)

      setDimensions(data)
    }
  }, [])

  React.useEffect(() => {

    heatmapRef.current = createHeatMapInstance()

    if (heatmapRef.current) {
      // heatmapRef.current.setData()
      // heatmapRef.current.setData(createInitialData())
    }
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
      ref={ref}
      onClick={onClick}
      style={{width: 1233, height: 865, backgroundColor: 'red'}}
      // style={{width: dimensions.width, height: dimensions.height, backgroundColor: 'red'}}
    >
      <img
        ref={ref2}
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

const createInitialData = (): h337.HeatmapData<Record<"value" | "x" | "y", number>> => {
    
  // now generate some random data
  let points: h337.DataPoint[] = []
  let max = 0
  let min = 0
  const width = 1233
  const height = 865
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

/* 
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
  hasRandomData: boolean
}

const Heatmap: React.FC<Props> = (props) => {

  const heatmapRef: React.MutableRefObject<h337.Heatmap<"value", "x", "y"> | undefined> = React.useRef(undefined)

  const ref = React.useRef<HTMLImageElement>(null)

  // const [dimensions, setDimensions] = React.useState<Dimensions>({offsetX: 0, offsetY: 0, width: 0, height: 0}) 

  React.useEffect(() => {

    console.log('creating heatmap instance')
    heatmapRef.current = createHeatMapInstance()

    // if (heatmapRef.current) {
    //   // heatmapRef.current.setData()
    //   heatmapRef.current.setData(generateRandomData())
    // }
  }, [])

  if (props.hasRandomData && ref.current && heatmapRef.current) {

    console.log('hierzo')

    const dim = {
      offsetX: ref.current.offsetLeft,
      offsetY: ref.current.offsetTop,
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight
    }

    console.log('dim')
    console.log(dim)

    // setDimensions(dim)

    const data = generateRandomData(dim)

    heatmapRef.current.setData(data)
  }

  const createHeatMapInstance = () => {
    return h337.create({
      container: document.getElementById('heatmapContainer')!,
      // radius: 25,
      // opacity: 0.6
    })
  }

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('adding datapoint')
    console.log(`x: ${event.pageX} - y: ${event.pageY}`)

    if (heatmapRef.current) {
      console.log('hmm?')
      heatmapRef.current.addData({x: event.pageX, y: event.pageY, value: 1})
    }
  }

  return (
    // <div 
    //   id='heatmapContainer'
    //   ref={ref}
    //   onClick={onClick}
    // >
    // <img
    //   // onClick={onClick}
    //   className="vw-100"
    //   src={image}
    //   alt=''
    // /> 
    // </div>
    <img
      id='heatmapContainer'
      ref={ref}
      onClick={onClick}
      src={image}
      alt=''
    />
  )
}

const generateRandomData = (dimensions: Dimensions): h337.HeatmapData<Record<"value" | "x" | "y", number>> => {
    
  // now generate some random data
  let points: h337.DataPoint[] = []
  let min = 0
  let max = 0
  const width = dimensions.width
  const height = dimensions.height
  let len = 3

  while (len--) {
    const val = Math.floor(Math.random() * 3)

    max = Math.max(max, val)
    min = Math.min(min, val)

    const point = {
     x: Math.floor(Math.random() * width) + dimensions.offsetX,
     y: Math.floor(Math.random() * height) + dimensions.offsetY,
     value: val
    }

    console.log(point)

    points.push(point)
  }

  return {
    min,
    max,
    data: points
  }
}

export default Heatmap

*/