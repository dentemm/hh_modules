import axios from 'axios'

import ErrorData from '../models/errors/errors'
import HeatmapResponseData from '../models/responseData/heatmapResponseData'
import JuxtaposeResponseData from '../models/responseData/juxtapostResponseData'

const BASE_URL = 'https://hh-modules.herokuapp.com'

enum Endpoints {
  HEATMAP = '/heatmap/1/',
  JUXTAPOSE = '/juxtapose/1/'
}

const fetchHeatmapImage = async (): Promise<string> => {

  // const url = BASE_URL + Endpoints.HEATMAP

  const url = require('./../static/dev/images/heatmap.jpg')

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

const fetchJuxtaposeImages = async (): Promise<JuxtaposeResponseData> => {

  const url = BASE_URL + Endpoints.JUXTAPOSE

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
