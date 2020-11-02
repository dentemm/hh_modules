import * as React from 'react'
import Heatmap from '../modules/Heatmap'

import ApiService from './../../services/api.service'

interface Props {}

const HeatmapPage: React.FC<Props> = () => {

  const [url, setUrl] = React.useState('')

  const [hasData, setHasData] = React.useState(false)

  const generateRandomData = () => {
    setHasData(!hasData)
  }

  React.useEffect(() => {
    
    const fetch = async () => {
      const result = await ApiService.fetchHeatmapImage()

      setUrl(result)
    }

    fetch()

  }, [])

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