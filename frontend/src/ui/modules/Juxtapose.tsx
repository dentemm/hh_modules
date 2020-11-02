import * as React from 'react'

import { useDrag } from 'react-use-gesture'

import { FullGestureState } from 'react-use-gesture/dist/types'

interface Dimensions {
  width: number,
  height: number,
  top: number,
  left: number
}

interface Props {
  beforeUrl: string,
  afterUrl: string
}

const JuxtaPose: React.FC<Props> = (props) => {

  const ref = React.useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = React.useState<Dimensions>({width: 0, height: 0, top: 0, left: 0}) 
  const [width, setWidth] = React.useState(50)

  React.useLayoutEffect(() => {

    const updateSize = () => {
      if (ref.current) {

        const currentWidth = ref.current.offsetWidth
        const currentLeft = ref.current.offsetLeft

        const data: Dimensions = {
          width: currentWidth,
          height: ref.current.offsetHeight,
          top: ref.current.offsetTop,
          left: currentLeft
        }
        setDimensions(data)
        setWidth(currentWidth / 2)
      } 
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)

  }, [])

  const gesture = useDrag(state => handler(state))

  const handler = (state: FullGestureState<'drag'>) => {

    const currentValue = state.xy[0]
    setWidth(currentValue - dimensions.left)
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
          src={props.beforeUrl}
          alt={''}
          className="d-block img img-fluid"
          style={{width: '100%'}}
        />
        <figcaption
          className="position-absolute overflow-hidden" 
          style={{
            top: dimensions.top,
            left: dimensions.left,
            width: `${width}px`
          }}
        >
          <img
            src={props.afterUrl}
            alt={''}
            className="d-block"
            style={{opacity: '70%', width: dimensions.width}}
          />
        </figcaption>
      </figure>
    </div>
  )
}

export default JuxtaPose