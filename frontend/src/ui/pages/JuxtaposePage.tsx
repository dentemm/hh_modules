import * as React from 'react'
import Juxtapose from '../modules/Juxtapose'

interface Props {}

const JuxtaposePage: React.FC<Props> = () => {

  return (
    <div className="container">
      <Juxtapose
        beforeUrl={'https://hh-modules.s3.eu-central-1.amazonaws.com/images/juxtapose/before.jpg'}
        afterUrl={'https://hh-modules.s3.eu-central-1.amazonaws.com/images/juxtapose/after.jpg'}
      />
    </div>
  )

}

export default JuxtaposePage