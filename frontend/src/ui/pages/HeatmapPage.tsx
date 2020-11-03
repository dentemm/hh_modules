import * as React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Heatmap from '../modules/Heatmap'
import { AppRoutes } from '../navigation/NavBar'
import {parseUrl} from './JuxtaposePage'

import ApiService from './../../services/api.service'

interface Props {}

const HeatmapPage: React.FC<Props> = () => {

  const [currentId, setCurrentId] = React.useState(1)
  const [url, setUrl] = React.useState('')
  const [hasData, setHasData] = React.useState(false)

  const match = useRouteMatch<{id: string}>(`${AppRoutes.HEATMAP}/:id`)

  if (match) {
    const id = parseUrl(match)
    setCurrentId(id)
  }

  const generateRandomData = () => {
    setHasData(!hasData)
  }

  React.useEffect(() => {
    
    const fetch = async () => {
      const result = await ApiService.fetchHeatmapImage(currentId)

      setUrl(result)
    }

    fetch()

  }, [currentId])

  return (
    <div className="container">
      <h2>Heatmap</h2>
      <div
        className="btn btn-primary m-3"
        onClick={generateRandomData}
      >
        {hasData ? 
        <span>
          Reset heatmap data
        </span>
        :
        <span>
          Generate random heatmap data
        </span>
        }       
      </div>

      <Heatmap
        imageUrl={url}
        test={hasData}
      />
    </div>
  )
}

export default HeatmapPage