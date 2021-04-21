import axios from 'axios'
import FetcherRulesService, { Result } from './FetcherRulesService'

export default class AxiosService implements FetcherRulesService {
  URL: String = process.env.SERVER_API

  async get(path: string) {
    if (!path) throw new Error('path.required')
    const response = await axios.post(`${URL}${path}`)
    return {
      data: response,
      error: null
    }
  }

  async getExternalAPI(path: string): Promise<Result> {
    if (!path) throw new Error('path.required')
    const response = await axios.get(
      `https://my-json-server.typicode.com/typicode/demo/${path}`
    )
    return {
      data: response.data,
      error: null
    }
  }
}
