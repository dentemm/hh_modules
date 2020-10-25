import * as React from 'react'

import before from '../../static/dev/images/before.jpg'
import after from '../../static/dev/images/after.jpg'

const JuxtaPose: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center"
    >
      <div 
        style={{width: '50%'}}
        className="d-flex bg-secondary d-block"
      >
        <figure
          className="bg-primary"
          style={{width: '100%'}}
        >
          <img
            src={before}
            alt={''}
            className="position-relative img-fluid"
            style={{width: '100%'}}
          />
          <figcaption
            className="position-absolute"
            style={{top: 0, left: '25%', width: '50%'}}
          >
            <img
              src={after}
              alt={''}
              className="img-fluid"
              style={{width: '100%'}}
            />
          </figcaption>
          
        </figure>
      {/* <img
        src={before}
        alt={''}
        className="position-relative img-fluid"
        // style={{width: '100%'}}
      />
      <img
        src={after}
        alt={''}
        className="position-absolute"
        // style={{top: 0, left: 0}}
      /> */}
      </div>
    </div>
  )
}

export default JuxtaPose