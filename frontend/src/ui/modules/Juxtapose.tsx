import * as React from 'react'

import before from '../../static/dev/images/before.jpg'
import after from '../../static/dev/images/after.jpg'

const JuxtaPose: React.FC = () => {
  return (
    <div
      className="d-flex bg-primary"
    >
      <img
        src={before}
        alt={''}
        className="position-relative"
      />
      <img
        src={after}
        alt={''}
        className="position-absolute"
        style={{opacity: 0.5}}
      />
    </div>
  )
}

export default JuxtaPose