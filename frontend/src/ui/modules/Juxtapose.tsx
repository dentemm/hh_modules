import * as React from 'react'

import before from '../../static/dev/images/before.jpg'
import after from '../../static/dev/images/after.jpg'

const JuxtaPose: React.FC = () => {
  return (
    <div>
      <img
        src={before}
        alt={''}
      />
      <img
        src={after}
        alt={''}
      />
    </div>
  )
}

export default JuxtaPose