import * as React from 'react'

import { useDrag } from 'react-use-gesture'

import before from '../../static/dev/images/before.jpg'
import after from '../../static/dev/images/after.jpg'
import { FullGestureState } from 'react-use-gesture/dist/types'

interface Dimensions {
  width: number,
  height: number,
  top: number,
  left: number
}

const JuxtaPose: React.FC = () => {

  const ref = React.useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = React.useState<Dimensions>({width: 0, height: 0, top: 0, left: 0}) 
  const [width, setWidth] = React.useState(50)
  // const [position, setPosition] = React.useState({top: 0, left: 0})

  React.useEffect(() => {
    if (ref.current) {

      const data: Dimensions = {
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
        top: ref.current.offsetTop,
        left: ref.current.offsetLeft
      }

      setDimensions(data)
    }
  }, [])

  const gesture = useDrag(state => handler(state))

  const handler = (state: FullGestureState<'drag'>) => {

    const currentValue = state.xy[0]
    let percentage = 100 * currentValue / dimensions.width

    if (percentage > 100) {
      percentage = 100
    } else if (percentage < 0) {
      percentage = 0
    }
    setWidth(percentage)
  }

  return (
    <div 
      ref={ref}
      {...gesture()}
      style={{touchAction: 'pan-y'}}
    >
      <figure
        style={{width: '100%'}}
      >
        <img
          src={before}
          alt={''}
          className="d-block vw-100"
          // style={{width: '100%'}}
        />
        <figcaption
          className="position-absolute overflow-hidden" 
          style={{top: dimensions.top, left: dimensions.height, width: `${width}%`}}
        >
          <img
            src={after}
            alt={''}
            className="d-block vw-100"
            style={{opacity: '100%'}}
          />
        </figcaption>
      </figure>
    </div>
  )
}

export default JuxtaPose