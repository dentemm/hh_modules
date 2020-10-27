import * as React from 'react'

import heatmap from '../../static/dev/images/heatmap.jpg'


const Heatmap: React.FC = () => {

  const onClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    console.log(event.pageX)
    console.log(event.pageY)
  }

  return (
    <img
      onClick={onClick}
      className="vw-100"
      src={heatmap}
      alt=''
    />
  )
}

export default Heatmap