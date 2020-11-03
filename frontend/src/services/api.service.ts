import axios from 'axios'

import ErrorData from '../models/errors/errors'
import HeatmapResponseData from '../models/responseData/heatmapResponseData'
import JuxtaposeResponseData from '../models/responseData/juxtapostResponseData'

const BASE_URL = 'https://hh-modules.herokuapp.com'

enum Endpoints {
  HEATMAP = '/api/heatmap/',
  JUXTAPOSE = '/api/juxtapose/'
}

const fetchHeatmapImage = async (id: number): Promise<string> => {

  const url = `${BASE_URL}${Endpoints.HEATMAP}${id}/`

  try {
    const result = await axios.get<HeatmapResponseData>(url)

    if (result.status === 200) {
      return result.data.image
    } 
    throw new Error()
    
  } catch (error) {
    
    console.warn(`${ErrorData.FETCH_HEATMAP}: ${error}`)
    return Promise.reject()
  }
}

const fetchJuxtaposeImages = async (id: number): Promise<JuxtaposeResponseData> => {

  const url = `${BASE_URL}${Endpoints.JUXTAPOSE}${id}/`

  try {
    const result = await axios.get<JuxtaposeResponseData>(url)

    if (result.status === 200) {
      return result.data
    } 
    throw new Error()
    
  } catch (error) {
    
    console.warn(`${ErrorData.FETCH_JUXTAPOSE}: ${error}`)
    return Promise.reject()
  }
}

const ApiService = {
  fetchHeatmapImage,
  fetchJuxtaposeImages
}

export default ApiService
