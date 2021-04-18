import axios from 'axios'
import FetcherRulesService from './FetcherRulesService'

export default class AxiosService implements FetcherRulesService {
  URL: String = process.env.SERVER_API

  async post(path: string, data: object) {
    if (!path) throw new Error('path.required')
    const response = await axios.post(`${URL}${path}`, data)
    return {
      data: response,
      error: null
    }
  }

  async get() {
    return {
      data: {},
      error: null
    }
  }

  async update() {
    return {
      data: {},
      error: null
    }
  }

  async delete() {
    return {
      data: {},
      error: null
    }
  }
}
