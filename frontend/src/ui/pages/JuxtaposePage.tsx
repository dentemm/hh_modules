import * as React from 'react'
import {
  match,
  useRouteMatch
} from 'react-router-dom'
import ApiService from '../../services/api.service'

import Juxtapose from '../modules/Juxtapose'
import { AppRoutes } from '../navigation/NavBar'

interface Props {}

const JuxtaposePage: React.FC<Props> = () => {

  const [currentId, setCurrentId] = React.useState(1)
  const [images, setImages] = React.useState({before: '', after: ''})

  const match = useRouteMatch<{id: string}>(`${AppRoutes.JUXTAPOSE}/:id`)

  if (match) {
    const id = parseUrl(match)
    setCurrentId(id)
  }

  React.useEffect(() => {
    
    const fetch = async () => {
      const result = await ApiService.fetchJuxtaposeImages(currentId)

      setImages(result)
    }

    fetch()

  }, [currentId])

  return (
    <div className="container">
      <Juxtapose
        beforeUrl={images.before}
        afterUrl={images.after}
      />
    </div>
  )

}

export const parseUrl = (match: match<{id: string}>): number => {

  let id = match.params.id
  let idNumber = +id

  if (isNaN(idNumber)) {
    return 1
  }
  return idNumber
} 

export default JuxtaposePage